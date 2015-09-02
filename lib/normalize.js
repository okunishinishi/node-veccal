/**
 * Normalize vectors.
 * @memberof module:veccal/lib
 * @function normalize
 * @param {number[]} vector - Vector to normalize.
 * @param {number} [size=1] - Size to fit.
 * @returns {number[]} - Normalized vector.
 *
 */

"use strict";

var scale = require('./scale'),
    size = require('./size');

/** @lends normalize */
function normalize(vector, normalizeSize) {
    var rate = (normalizeSize || 1) / size(vector);
    return scale(vector, rate);
}

module.exports = normalize;