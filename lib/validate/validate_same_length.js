/**
 * Check if same length
 * @function validateSameLength
 */

'use strict'

/** @lends validateSameLength */
function validateSameLength (vector1, vector2) {
  var len1 = vector1.length,
    len2 = vector2.length;

  var ok = len1 === len2;
  if (!ok) {
    var msg = [
      "Length mismatch:",
      len1,
      'and',
      len2
    ].join(' ')
    throw new Error(msg)
  }
}

module.exports = validateSameLength;