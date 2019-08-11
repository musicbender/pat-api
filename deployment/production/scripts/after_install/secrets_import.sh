#!/bin/sh

cd /var/www/pat-api
node deployment/production/scripts/after_install/secrets_import.js > deployment/production/app-production.json.temp
cat deployment/production/app-production.json.temp
rm deployment/production/app-production.json
mv deployment/production/app-production.json.temp deployment/production/app-production.json
