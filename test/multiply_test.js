/**
 * Test case for multiply.
 * Runs with nodeunit.
 */

var multiply = require('../lib/multiply.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Multiply'] = function (test) {
    test.deepEqual(multiply([3, 2, 1], [7, 6, 5]), [21, 12, 5]);
    test.deepEqual(multiply([3, 2, 1], [7, 6, 5], [0, 1, 2]), [0, 12, 10]);

    test.throws(function () {
        multiply([1, 2], [4]);
    });
    test.done();
};

