(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.numcal = require("../lib/index.js");
},{"../lib/index.js":4}],2:[function(require,module,exports){
/**
 * Operate two functions.
 * @function _operate
 * @param {number[]} vector1 - Vector to operate.
 * @param {number[]} vector2 - Vector to operate.
 * @param {function} operator - Operator function.
 * @returns {number[]} - Operated vector.
 * @private
 */
"use strict";

var validateSameLength = require('./validate/validate_same_length');

function _operate(vector1, vector2, operator) {
    validateSameLength(vector1, vector2);

    var len = vector1.length;
    var result = [];
    for (var i = 0; i < len; i++) {
        var operated = operator(vector1[i], vector2[i], i);
        result.push(operated);
    }
    return result;
}

module.exports = _operate;
},{"./validate/validate_same_length":8}],3:[function(require,module,exports){
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
},{"./_operate":2}],4:[function(require,module,exports){
/**
 * Basic vector calculation functions.
 * @module veccal
 */

"use strict";

module.exports = {
    get add() { return require('./add'); },
    get multiply() { return require('./multiply'); },
    get scale() { return require('./scale'); },
    get size() { return require('./size'); }
};
},{"./add":3,"./multiply":5,"./scale":6,"./size":7}],5:[function(require,module,exports){
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

},{"./_operate":2}],6:[function(require,module,exports){
/**
 * Add vectors.
 * @memberof module:veccal/lib
 * @function scale
 * @param {number[]} vector - Vector to scale.
 * @param {number} rate - Scale rate
 * @returns {number[]} - Scaled vector.
 *
 */

"use strict";

function scale(vector, rate) {
    var result = [];
    for (var i = 0, len = vector.length; i < len; i++) {
        var val = vector[i] * rate;
        result.push(val);
    }
    return result;
}

module.exports = scale;
},{}],7:[function(require,module,exports){
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

},{"./multiply":5,"numcal":10}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
/**
 * Get average value.
 * @function ave
 * @param {...number} values - Values to ave.
 * @returns {number} - Average value.
 */


"use strict";

var sum = require('./sum');

/** @lends ave */
function ave() {
    var args = arguments;
    var values = 0, size = 0;
    for (var i = 0, len = args.length; i < len; i++) {
        var val = args[i];
        if (Array.isArray(val)) {
            size += val.length;
            val = sum.apply(sum, val);
        } else {
            size += 1;
        }
        values += val;
    }
    return values / size;
}

module.exports = ave;


},{"./sum":13}],10:[function(require,module,exports){
/**
 * Basic numeric calculation functions.
 * @module numcal
 */

"use strict";

module.exports = {
    get ave() { return require('./ave'); },
    get max() { return require('./max'); },
    get min() { return require('./min'); },
    get sum() { return require('./sum'); }
};
},{"./ave":9,"./max":11,"./min":12,"./sum":13}],11:[function(require,module,exports){
/**
 * Find max value.
 * @function max
 * @param {...number} values - Values to compare.
 * @returns {number} - Max number.
 */


"use strict";

/** @lends max */
function max() {
    var args = arguments;
    var result = undefined;
    for (var i = 0, len = args.length; i < len; i++) {
        var val = args[i];
        if (Array.isArray(val)) {
            val = max.apply(max, val);
        }
        var hit = (result === undefined) || (val > result);
        if (hit) {
            result = val;
        }
    }
    return result;
}

module.exports = max;


},{}],12:[function(require,module,exports){
/**
 * Find min value.
 * @function min
 * @param {...number} values - Values to compare.
 * @returns {number} - Min number.
 */


"use strict";

/** @lends min */
function min() {
    var args = arguments;
    var result = undefined;
    for (var i = 0, len = args.length; i < len; i++) {
        var val = args[i];
        if (Array.isArray(val)) {
            val = min.apply(min, val);
        }
        var hit = (result === undefined) || (val < result);
        if (hit) {
            result = val;
        }
    }
    return result;
}

module.exports = min;


},{}],13:[function(require,module,exports){
/**
 * Get sum value.
 * @function sum
 * @param {...number} values - Values to sum.
 * @returns {number} - Sum value.
 */


"use strict";

/** @lends sum */
function sum() {
    var args = arguments;
    var result = 0;
    for (var i = 0, len = args.length; i < len; i++) {
        var val = args[i];
        if (Array.isArray(val)) {
            val = sum.apply(sum, val);
        }
        result += val;
    }
    return result;
}

module.exports = sum;


},{}]},{},[1]);
