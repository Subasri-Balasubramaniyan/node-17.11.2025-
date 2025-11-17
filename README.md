# Node.js Core Concepts and NPM Ecosystem

This document provides an overview of key Node.js core modules and the npm package ecosystem. It covers modules for working with files, paths, system information, and events, and explains how to manage and publish packages using npm.

---

## 🧩 Core Modules

Node.js comes with several built-in modules that provide essential functionality.

---

### 📁 File System (`fs`)

The `fs` module enables interaction with the file system.

#### Common Operations:
- **Read a file:**
  ```js
  const fs = require('fs');
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
Write to a file:

js
Copy code
fs.writeFile('output.txt', 'Hello World!', err => {
  if (err) throw err;
  console.log('File created');
});
Append to a file:

js
Copy code
fs.appendFile('output.txt', '\nMore content', err => {
  if (err) throw err;
});
📍 Path Module (path)
Handles and manipulates file paths in a platform-independent way.

js
Copy code
const path = require('path');
console.log(path.basename(__filename)); // Prints current file name
💻 OS Module (os)
Provides information about the operating system.

js
Copy code
const os = require('os');
console.log(os.platform());  // Prints OS platform
console.log(os.totalmem());  // Total system memory
🌐 URL Module (url)
Useful for parsing and formatting URLs.

js
Copy code
const url = require('url');
const parsedUrl = url.parse('https://example.com/path?query=123', true);
console.log(parsedUrl.query);
🎉 Events and EventEmitter
Allows you to work with custom and system events.

js
Copy code
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', name => console.log(`Hello, ${name}!`));
emitter.emit('greet', 'Subasri');
⚙️ Process Object and Environment Variables
Access information about the current process.

js
Copy code
console.log(process.env.NODE_ENV); // Environment variable
console.log(process.pid);          // Process ID
Set environment variables:

sh
Copy code
NODE_ENV=production node app.js
🛠️ NPM Ecosystem
npm (Node Package Manager) manages external modules and scripts.

📦 Installing Packages
Local Install (project only):

sh
Copy code
npm install express
Global Install (system-wide):

sh
Copy code
npm install -g nodemon
🔢 Package Versioning (Semantic Versioning)
Versions follow: MAJOR.MINOR.PATCH (e.g., 1.4.2)

MAJOR → Breaking changes

MINOR → New features (backward compatible)

PATCH → Bug fixes

✨ Creating Your Own Packages
Initialize:

sh
Copy code
npm init
Write your code in a main file (e.g., index.js)

Add "main": "index.js" to package.json

Publish:

sh
Copy code
npm publish
🔧 NPM Scripts
Defines custom commands in package.json.

Example:

json
Copy code
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
Run:

sh
Copy code
npm run dev
📂 node_modules and package-lock.json
node_modules/ contains all installed dependencies.

package-lock.json locks dependency versions to ensure consistency across systems.

