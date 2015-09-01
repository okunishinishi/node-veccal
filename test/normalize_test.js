/**
 * Test case for normalize.
 * Runs with nodeunit.
 */

var normalize = require('../lib/normalize.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Normalize'] = function (test) {
    test.deepEqual(
        normalize([1, 2, 2]),
        [1 / 3, 2 / 3, 2 / 3]
    );
    test.done();
};

