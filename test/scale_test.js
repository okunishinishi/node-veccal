/**
 * Test case for scale.
 * Runs with nodeunit.
 */

var scale = require('../lib/scale.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Scale'] = function (test) {
    test.deepEqual(scale([1, 2, 3], 2), [
        2, 4, 6
    ]);
    test.done();
};

