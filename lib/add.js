/**
 * Add vectors.
 * @memberof module:veccal/lib
 * @function add
 * @param {Array.<number[]>} - Vectors to add.
 * @throws Mismatch error.
 * @returns {number[]} - Added vector.
 *
 */

"use strict";

var validateSameLength = require('./validate/validate_same_length');

/** @lends add */
function add(vector1, vector2) {
    validateSameLength(vector1, vector2);

    var len = vector1.length;
    var result = [];
    for (var i = 0; i < len; i++) {
        result.push(vector1[i] + vector2[i]);
    }
    return result;
}

module.exports = add;