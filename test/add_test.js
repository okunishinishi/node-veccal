/**
 * Test case for add.
 * Runs with nodeunit.
 */

var add = require('../lib/add.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Add'] = function (test) {
    test.deepEqual(add([3, 2, 1], [7, 6, 5]), [10, 8, 6]);

    test.throws(function () {
        add([1, 2], [5]);
    });
    test.done();
};

