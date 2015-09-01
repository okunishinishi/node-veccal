(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.numcal = require("../lib/index.js");
},{"../lib/index.js":3}],2:[function(require,module,exports){
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
},{"./validate/validate_same_length":4}],3:[function(require,module,exports){
/**
 * Basic vector calculation functions.
 * @module veccal
 */

"use strict";

module.exports = {
    get add() { return require('./add'); }
};
},{"./add":2}],4:[function(require,module,exports){
/**
 * Check if same length
 * @function validateSameLength
 */

"use strict";

/** @lends validateSameLength */
function validateSameLength(vector1, vector2) {
    var len1 = vector1.length,
        len2 = vector2.length;

    var ok = len1 === len2;
    if (!ok) {
        var msg = [
            "Length mismatch:",
            len1,
            'and',
            len2
        ].join(' ');
        throw new Error(msg);
    }
}

module.exports = validateSameLength;
},{}]},{},[1]);
