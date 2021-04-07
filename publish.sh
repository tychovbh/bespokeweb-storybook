#!/bin/bash

rm -rf dist
yarn build
yarn publish
git push
