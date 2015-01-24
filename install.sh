#!/bin/sh

echo "Kill old bower"
rm -rf bower_components

echo "Kill old node"
rm -rf node_modules

sudo npm i -g gulp bower cordova 

npm i
bower i
