/**
 * Basic vector calculation functions.
 * @module veccal
 */

"use strict";

module.exports = {
    get add() { return require('./add'); },
    get multiply() { return require('./multiply'); },
    get normalize() { return require('./normalize'); },
    get revert() { return require('./revert'); },
    get scale() { return require('./scale'); },
    get size() { return require('./size'); },
    get subtract() { return require('./subtract'); }
};