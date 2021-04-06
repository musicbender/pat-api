#!/bin/bash

git push --tags && git push && echo \"Successfully released version $npm_package_version!\"