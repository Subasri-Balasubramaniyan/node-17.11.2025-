const url = require('url');  /* importing module */
const myURL = new URL('https://www.example.com/products?category=books&id=10');

console.log(myURL.hostname);  // www.example.com
console.log(myURL.pathname);  // /products
console.log(myURL.searchParams.get('category')); // books

/* The URL class is part of the global API — available without explicit require() in modern Node versions. */