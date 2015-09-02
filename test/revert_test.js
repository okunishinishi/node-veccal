/**
 * Test case for revert.
 * Runs with nodeunit.
 */

var revert = require('../lib/revert.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Revert'] = function (test) {
    test.deepEqual(
        revert([1, 2, 3]),
        [-1, -2, -3]
    );
    test.done();
};

