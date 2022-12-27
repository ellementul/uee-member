const { Member } = require('uee')
const { Time } = require('@ellementul/timecount')

const startEvent = require('./events/start_event')
const timeEvent = require('./events/time_event')
class Ticker extends Member {
  constructor() {
    super()

    this.onEvent(startEvent, () => this.start())
    this._timemark = new Time
    this._timeout = 200
  }
  start () {
    setInterval(() => this.send(timeEvent, {
      state: {
        timemark: this._timemark.toArray(),
        UTC: (new Date).toUTCString() 
      }
    }), this._timeout)
  }
}

module.exports = { 
  Ticker,
  startEvent: require('./events/start_event'),
  timeEvent: require('./events/time_event')
}