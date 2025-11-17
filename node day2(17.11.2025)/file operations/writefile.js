const fs = require('fs');  /* importing module */
fs.writeFile('sree.txt', 'Hello Subasri!!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
