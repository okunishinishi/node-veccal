/**
 * Test case for normalize.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const normalize = require('../lib/normalize.js')

it('Normalize', (done) => {
    assert.deepEqual(
        normalize([1, 2, 2]),
        [1 / 3, 2 / 3, 2 / 3]
    )
    assert.deepEqual(
        normalize([1, 2, 2], 3),
        [1, 2, 2]
    )
    done()
})

