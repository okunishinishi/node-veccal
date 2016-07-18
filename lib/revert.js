/**
 * Revert a vector.
 * @memberof module:veccal/lib
 * @function revert
 * @param {number[]} - Vector to revert.
 * @returns {number[]} - Reversed vector.
 */

'use strict'

const scale = require('./scale')

/** @lends revert */
function revert (vector) {
  return scale(vector, -1)
}

module.exports = revert
