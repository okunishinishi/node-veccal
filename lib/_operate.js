/**
 * Operate two functions.
 * @function _operate
 * @param {number[]} vector1 - Vector to operate.
 * @param {number[]} vector2 - Vector to operate.
 * @param {function} operator - Operator function.
 * @returns {number[]} - Operated vector.
 * @private
 */
'use strict'

const validateSameLength = require('./validate/validate_same_length')

function _operate (vector1, vector2, operator) {
  validateSameLength(vector1, vector2)

  let len = vector1.length
  let result = []
  for (let i = 0; i < len; i++) {
    var operated = operator(vector1[ i ], vector2[ i ], i)
    result.push(operated)
  }
  return result
}

module.exports = _operate
