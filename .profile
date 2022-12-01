#!/bin/bash

echo "starting cloud sql proxy for pat-api..."

export PATAPI_LAST_DEPLOY_DATE=$HEROKU_RELEASE_CREATED_AT
export PATAPI_COMMIT_HASH=$HEROKU_SLUG_COMMIT
export PATAPI_BUILD_NUMBER=$HEROKU_RELEASE_VERSION

bin/run_cloud_sql_proxy