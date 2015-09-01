/**
 * Test case for size.
 * Runs with nodeunit.
 */

var size = require('../lib/size.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Size'] = function(test){
    test.deepEqual(size([3, 4]), 5);

    test.done();
};

