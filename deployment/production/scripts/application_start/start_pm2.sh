#!/bin/sh

cd /var/www/pat-api
pm2 start deployment/production/app-production.json --interpreter node_modules/@babel/node/lib/babel-node.js
