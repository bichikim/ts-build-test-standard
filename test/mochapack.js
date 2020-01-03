// eslint-disable-next-line no-undefined
require('jsdom-global')(undefined, {pretendToBeVisual: true, url: 'http://localhost'})
require('core-js/stable')
require('regenerator-runtime/runtime')
global.expect = require('chai').expect
