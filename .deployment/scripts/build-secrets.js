const AWS = require('aws-sdk');
const fs = require('fs');
const minimist = require('minimist');

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
      ],
      alias: {
        s: 'secret',
        f: 'file',
        r: 'region',
        m: 'metaname',
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
    secretsmanager.getSecretValue(params).promise()
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
              name: secretName
          },
          type: 'Opaque',
          data: buildData(secrets)
        };

        fs.writeFileSync(jsonFile, JSON.stringify(output));
      })
      .catch((err) => {
        console.error(`ERROR: Error: ${err.message}`);
        process.exit(1);
      });
}

// execute
buildSecrets();
