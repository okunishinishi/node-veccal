/**
 * Normalize vectors.
 * @memberof module:veccal/lib
 * @function normalize
 * @param {number[]} vector - Vector to normalize.
 * @returns {number[]} - Normaized vector.
 *
 */

"use strict";

var scale = require('./scale'),
    size = require('./size');

/** @lends normalize */
function normalize(vector) {
    var rate = 1 / size(vector);
    return scale(vector, rate);
}

module.exports = normalize;