/**
 * Scale vectors.
 * @memberof module:veccal/lib
 * @function scale
 * @param {number[]} vector - Vector to scale.
 * @param {number} rate - Scale rate
 * @returns {number[]} - Scaled vector.
 *
 */

'use strict'

/** @lends scale */
function scale (vector, rate) {
  let result = []
  for (let i = 0, len = vector.length; i < len; i++) {
    var val = vector[ i ] * rate
    result.push(val)
  }
  return result
}

module.exports = scale
