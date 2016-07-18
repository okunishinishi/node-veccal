/**
 * Test case for subtract.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const subtract = require('../lib/subtract.js')

it('Subtract', (done) => {
  assert.deepEqual(subtract([ 3, 2, 1 ], [ 7, 6, 5 ]), [ -4, -4, -4 ])
  assert.deepEqual(subtract([ 3, 2, 1 ], [ 7, 6, 5 ], [ 2, 3, 4 ]), [ -6, -7, -8 ])

  assert.throws(function () {
    subtract([ 1, 2 ], [ 5 ])
  })
  done()
})

