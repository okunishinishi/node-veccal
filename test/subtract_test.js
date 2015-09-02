/**
 * Test case for subtract.
 * Runs with nodeunit.
 */

var subtract = require('../lib/subtract.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Subtract'] = function (test) {
    test.deepEqual(subtract([3, 2, 1], [7, 6, 5]), [-4, -4, -4]);
    test.deepEqual(subtract([3, 2, 1], [7, 6, 5], [2, 3, 4]), [-6, -7, -8]);

    test.throws(function () {
        subtract([1, 2], [5]);
    });
    test.done();
};

