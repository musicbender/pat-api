const AWS = require('aws-sdk');
const fs = require('fs');
const minimist = require('minimist');

const encode = (str) => {
  return Buffer.from(srt).toString('base64');
}

const buildData = (secrets) => {
    let output = {};
    
    Object.keys(secrets).forEach((s) => {
        output = {
            ...output, 
            [s]: Buffer.from(secrets[s]).toString('base64')
        }
    });

    return output;
}

// meta data env variables about the deployment
const buildMetaData = (buildNumber, commitHash) => {
  const timestamp = Date.now();
  return {
    "PATAPI_BUILD_NUMBER": encode(buildNumber),
    "PATAPI_COMMIT_HASH": encode(commitHash),
    "PATAPI_LAST_DEPLOY_DATE": encode(new Date(timestamp).toLocaleDateString()),
  }
}

const buildSecrets = () => {
    // Get arguments
    const args = minimist(process.argv.slice(2), {
      string: [
        'secret',
        'metaname',
        'file',
        'region',
        'aws-key',
        'aws-secret',
        'build-number',
        'commit-hash'
      ],
      alias: {
        s: 'secret',
        f: 'file',
        r: 'region',
        m: 'metaname',
        b: 'build-number',
        c: 'commit-hash'
      },
      default: {
        region: 'us-east-2',
      }
    });

    const secret = args['secret'];
    const jsonFile = args['file'];
    const region = args['region'];
    const accessKeyId = args['aws-key'];
    const secretAccessKey = args['aws-secret'];
    const metaname = args['metaname'] || secret;
    const buildNumber = args['build-number'];
    const commitHash = args['commit-hash'];

    // Validate
    if (!secret || secret.length === 0) {
      console.error('ERROR: --secret|-s must be provided');
      process.exit(1);
    }
    if (!jsonFile || jsonFile.length === 0) {
      console.error('ERROR: --file|-f must be provided');
      process.exit(1);
    }
    if (!jsonFile.endsWith('.json')) {
      console.error('ERROR: --file|-f must be a YAML file.');
      process.exit(1);
    }

    // Instantiate Secrets Manager
    const options = {
      apiVersion: '2017-10-17',
      region
    };

    if (accessKeyId && accessKeyId.length > 1) {
      options.accessKeyId = accessKeyId;
    }

    if (secretAccessKey && secretAccessKey.length > 1) {
      options.secretAccessKey = secretAccessKey;
    }

    const secretsmanager = new AWS.SecretsManager(options);

    // Get Secret
    const params = {
      SecretId: secret,
    };

    // Get secrets and create secret
    secretsmanager.getSecretValue(params)
      .promise()
      .then(({ SecretString }) => {
        console.log('Secrets retrieved.');
        const secretName = metaname
          .replace('/', '-');

        console.log('Building Secret:', secretName);
        const secrets = JSON.parse(SecretString);

        const output = {
          apiVersion: 'v1',
          kind: 'Secret',
          metadata: {
              name: secretName,
              namespace: 'default'
          },
          type: 'Opaque',
          data: { 
            ...buildData(secrets),
            ...buildMetaData(buildNumber, commitHash)
          }
        };

        fs.writeFileSync(jsonFile, JSON.stringify(output));
      })
      .catch((err) => {
        console.error(`Error creating pat-api secrets: ${err.message}`);
        process.exit(1);
      });
}

// execute
buildSecrets();
