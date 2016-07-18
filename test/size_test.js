/**
 * Test case for size.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const size = require('../lib/size.js')

it('Size', (done) => {
  assert.deepEqual(size([ 3, 4 ]), 5)
  done()
})

