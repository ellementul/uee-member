const { EventFactory, Types } = require('uee')
const { LIMIT } = require('@ellementul/timecount')
const type = Types.Object.Def({
  system: "Timing",
  entity: "Time",
  state: {
    timemark: Types.Array.Def(Types.Index.Def(LIMIT), 2, false)
  }
}, true)
module.exports = EventFactory(type)