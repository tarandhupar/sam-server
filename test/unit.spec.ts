declare var require: any;
declare var __karma__: any;


import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/jasmine-patch.js';
import '@angular/core';
import '@angular/core/testing';

const args = __karma__.config.args;
const opts = args[0];

const testsContext = require.context('../src', true, /\.spec\.ts/);

let modules = testsContext.keys();
let testPath = opts.testPath;

if (testPath) {
  testPath = './' + testPath.slice(4);
  modules = modules.filter(modulePath => modulePath.startsWith(testPath));
}

modules.forEach(testsContext);

const domAdapter = require('@angular/platform-browser/src/browser/browser_adapter');
domAdapter.BrowserDomAdapter.makeCurrent();