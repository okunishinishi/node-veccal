/**
 * Normalize vectors.
 * @memberof module:veccal/lib
 * @function normalize
 * @param {number[]} vector - Vector to normalize.
 * @param {number} [size=1] - Size to fit.
 * @returns {number[]} - Normalized vector.
 *
 */

'use strict'

const scale = require('./scale')
const size = require('./size')

/** @lends normalize */
function normalize (vector, normalizeSize) {
  let rate = (normalizeSize || 1) / size(vector)
  return scale(vector, rate)
}

module.exports = normalize
