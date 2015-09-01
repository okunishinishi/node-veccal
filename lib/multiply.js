/**
 * Multiply vectors
 * @memberof module:veccal/lib
 * @function multiply
 * @param {...number[]} - Vectors to add.
 * @throws Length mismatch error.
 * @returns {number[]} - Added vector.
 */

"use strict";

var _operate = require('./_operate');

function _multiplyOperation(val1, val2) {
    return val1 * val2;
}

/** @lends multiply */
function multiply(vector1, vector2) {
    return _operate(vector1, vector2, _multiplyOperation);
}

module.exports = multiply;
