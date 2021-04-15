#!/bin/bash

rm -rf dist
yarn build
yarn publish
yarn build-storybook
git commit -am "update storybook build"
git push
