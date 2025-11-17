const fs = require('fs');  /* importing module */
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

/* ⚠️ Synchronous methods block the event loop — avoid them in large apps. */