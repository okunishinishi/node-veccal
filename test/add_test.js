/**
 * Test case for add.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const add = require('../lib/add.js')

it('Add', (done) => {
  assert.deepEqual(add([ 3, 2, 1 ], [ 7, 6, 5 ]), [ 10, 8, 6 ])
  assert.deepEqual(add([ 3, 2, 1 ], [ 7, 6, 5 ], [ 2, 3, 4 ]), [ 12, 11, 10 ])

  assert.throws(function () {
    add([ 1, 2 ], [ 5 ])
  })
  done()
})

