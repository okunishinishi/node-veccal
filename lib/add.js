/**
 * Add vectors.
 * @memberof module:veccal/lib
 * @function add
 * @param {...number[]} vector - Vectors to add.
 * @throws Length mismatch error.
 * @returns {number[]} - Added vector.
 *
 */

"use strict";

var _operate = require('./_operate');

function _addOperation(val1, val2) {
    return val1 + val2;
}
/** @lends add */
function add(vector1, vector2) {
    return _operate(vector1, vector2, _addOperation);
}

module.exports = add;