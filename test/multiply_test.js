/**
 * Test case for multiply.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const multiply = require('../lib/multiply.js')

it('Multiply', (done) => {
  assert.deepEqual(multiply([ 3, 2, 1 ], [ 7, 6, 5 ]), [ 21, 12, 5 ])
  assert.deepEqual(multiply([ 3, 2, 1 ], [ 7, 6, 5 ], [ 0, 1, 2 ]), [ 0, 12, 10 ])

  assert.throws(function () {
    multiply([ 1, 2 ], [ 4 ])
  })
  done()
})

