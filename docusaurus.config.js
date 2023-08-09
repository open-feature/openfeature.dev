'use strict';

require('tsconfig-paths').register({
  baseUrl: './',
  paths: require('./tsconfig.json').compilerOptions.paths,
});

require('ts-node').register({
  scope: true,
  scopeDir: __dirname,
  transpileOnly: true,
});

module.exports = require('./docusaurus-ts-config');
