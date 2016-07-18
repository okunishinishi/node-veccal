/**
 * Basic vector calculation functions.
 * @module veccal
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get add () { return d(require('./add')) },
  get multiply () { return d(require('./multiply')) },
  get normalize () { return d(require('./normalize')) },
  get revert () { return d(require('./revert')) },
  get scale () { return d(require('./scale')) },
  get size () { return d(require('./size')) },
  get subtract () { return d(require('./subtract')) }
}
