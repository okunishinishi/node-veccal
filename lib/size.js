/**
 * Get size of vector
 * @memberof module:veccal/lib
 * @function size
 * @param {number[]} - Vector to get size.
 * @returns {number} - Size of vector.
 */

'use strict'

const multiply = require('./multiply')
const numcal = require('numcal')

/** @lends size */
function size (vector) {
  let size2 = multiply(vector, vector)
  return Math.sqrt(numcal.sum(size2))
}

module.exports = size
