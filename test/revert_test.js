/**
 * Test case for revert.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const revert = require('../lib/revert.js')

it('Revert', (done) => {
  assert.deepEqual(
    revert([ 1, 2, 3 ]),
    [ -1, -2, -3 ]
  )
  done()
})

