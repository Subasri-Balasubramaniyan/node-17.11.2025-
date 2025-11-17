const EventEmitter = require('events');
const emitter = new EventEmitter();

// Create event listener
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit (trigger) event
emitter.emit('greet', 'Subasri');


/* EventEmitter is also used internally by many Node modules (like HTTP servers). */
