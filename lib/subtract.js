/**
 * Subtract vectors.
 * @memberof module:veccal/lib
 * @function subtract
 * @param {...number[]} vector - Vectors to subtract.
 * @throws Length mismatch error.
 * @returns {number[]} - Subtracted vector.
 *
 */

"use strict";

var _operate = require('./_operate');

function _subtractOperation(val1, val2) {
    return val1 - val2;
}
/** @lends subtract */
function subtract(vector1, vector2) {
    var result = vector1;
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        result = _operate(result, arguments[i], _subtractOperation);
    }
    return result;
}

module.exports = subtract;