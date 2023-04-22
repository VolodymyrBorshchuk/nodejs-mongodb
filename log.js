const EventEmitter = require('events');

class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg)
        this.emit('some_event', { id: 1, text: 'some event text' });
    }
}

module.exports = Logger;