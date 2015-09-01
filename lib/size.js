/**
 * Get size of vector
 * @memberof module:veccal/lib
 * @function size
 * @param {number[]} - Vector to get size.
 * @returns {number} - Size of vector.
 */

"use strict";

var multiply = require('./multiply'),
    numcal = require('numcal');

/** @lends size */
function size(vector) {
    var size2 = multiply(vector, vector);
    return Math.sqrt(numcal.sum(size2));
}

module.exports = size;
