const { EventFactory, Types } = require('@ellementul/uee-core')
const type = Types.Object.Def({
  system: "Timing",
  entity: "Ticker",
  action: "Start"
})
module.exports = EventFactory(type)