const path = require('path');  /* importing module */
console.log(path.basename(__filename));  // file name only
console.log(path.dirname(__filename));   // directory path
console.log(path.extname(__filename));   // file extension
console.log(path.join(__dirname, 'folder', 'file.txt'));  // builds a path
console.log(path.resolve('folder', 'file.txt'));          // absolute path
/* __dirname → current directory path
__filename → current file path */