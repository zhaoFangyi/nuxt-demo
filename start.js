require('babel-core/register')({
  'presets': [
    'stage-3',
    'latest-node'
  ]
})
// babel-register
require('babel-polyfill')

require('./server')
