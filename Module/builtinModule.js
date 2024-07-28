// Node.js comes with a set of core modules that provide basic functionalities. These modules are part of the Node.js runtime and do not need to be installed.

// Examples:

// fs: File system operations
// http: Creating web servers
// path: Working with file and directory paths
// os: Operating system-related utilities
// events: Handling events


const fs = require('fs');

// Three way to access file path 
// using double backslash \\ 'Module\\example.txt'
// using forward slash / 'Module/example.txt'
// using path.join() 'Module/example.txt'
// const path = require('path');
// const filePath = path.join(__dirname, 'Module', 'example.txt');

fs.readFile('Module/example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
