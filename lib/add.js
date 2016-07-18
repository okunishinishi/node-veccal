/**
 * Add vectors.
 * @function add
 * @param {...number[]} vector - Vectors to add.
 * @throws Length mismatch error.
 * @returns {number[]} - Added vector.
 *
 */

'use strict'

const _operate = require('./_operate')

function _addOperation (val1, val2) {
  return val1 + val2
}
/** @lends add */
function add (vector1, vector2) {
  let result = vector1
  let len = arguments.length
  for (let i = 1; i < len; i++) {
    result = _operate(result, arguments[ i ], _addOperation)
  }
  return result
}

module.exports = add
