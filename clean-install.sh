#!/bin/sh
watchman watch-del-all
rm -rf node_modules
npm install
npm cache clean --force
rm -rf /tmp/metro-*
rm -rf ios/Pods
cd ios
pod update
cd ..