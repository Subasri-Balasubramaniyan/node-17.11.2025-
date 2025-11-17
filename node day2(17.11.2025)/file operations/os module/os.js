const os = require('os');  /* importing module */
console.log('Operating System:', os.type());  /* type of OS */
console.log('Platform:', os.platform()); /* platform of OS */
console.log('Architecture:', os.arch()); /* architecture of OS */
console.log('CPU Info:', os.cpus());  /* Information about CPU */
console.log('Total Memory:', os.totalmem()); /* Memory information of CPU */
console.log('Free Memory:', os.freemem()); /* Information about free memory */
console.log('Home Directory:', os.homedir());  /* Home directory of OS */
console.log('System Uptime (seconds):', os.uptime()); /* System Uptime */
