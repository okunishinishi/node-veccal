/**
 * Test case for scale.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const scale = require('../lib/scale.js')

it('Scale', (done) => {
  assert.deepEqual(scale([ 1, 2, 3 ], 2), [
    2, 4, 6
  ])
  done()
})

