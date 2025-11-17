const fs = require('fs');  /* importing module */
fs.appendFile('sree.txt', '\n I was placed as a software developer in Halleyx', (err) => {
  if (err) throw err;
  console.log('Data appended successfully!');
});
