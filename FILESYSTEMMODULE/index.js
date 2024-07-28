// The File System (fs) module in Node.js is a core module that allows you to interact with the file system on your computer. It provides methods for reading, writing, updating, deleting, and managing files and directories.

// const fs = require('fs');
// import fs from 'fs'; //Because we are using ES Module Syntax

// Standard fs Module

// The standard fs module (imported as import fs from 'fs'; or const fs = require('fs');) provides both synchronous and asynchronous methods for file operations. The asynchronous methods use callbacks to handle results or errors.

// 1. Reading Files

// Asynchronous: Use fs.readFile() to read a file asynchronously.
// fs.readFile('FILESYSTEMMODULE/example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Synchronous: Use fs.readFileSync() to read a file synchronously.

// try {
//   const data = fs.readFileSync('FILESYSTEMMODULE/example.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// 2. Writing Files
// Asynchronous: Use fs.writeFile() to write data to a file asynchronously.

// fs.writeFile('FILESYSTEMMODULE/output.txt', 'Hello, World!', (err) => {
//   if (err) throw err;
//   console.log('File has been written!');
// });

// Synchronous: Use fs.writeFileSync() to write data to a file synchronously.

// try {
//   fs.writeFileSync('FILESYSTEMMODULE/output.txt', 'Hello, World!');
//   console.log('File has been written!');
// } catch (err) {
//   console.error(err);
// }

// 3. Appending to Files
// Asynchronous: Use fs.appendFile() to append data to a file.

// fs.appendFile('FILESYSTEMMODULE/output.txt', '\nAppended text.', (err) => {
//   if (err) throw err;
//   console.log('Data has been appended to file!');
// });

// Synchronous: Use fs.appendFileSync() to append data to a file synchronously.

// try {
//   fs.appendFileSync('FILESYSTEMMODULE/output.txt', '\nAppended Another text.');
//   console.log('Data has been appended to file!');
// } catch (err) {
//   console.error(err);
// }

// 4. Deleting Files
// Asynchronous: Use fs.unlink() to delete a file.

// fs.unlink('FILESYSTEMMODULE/output.txt', (err) => {
//   if (err) throw err;
//   console.log('File has been deleted!');
// });

// Synchronous: Use fs.unlinkSync() to delete a file synchronously.

// try {
//   fs.unlinkSync('FILESYSTEMMODULE/output.txt');
//   console.log('File has been deleted!');
// } catch (err) {
//   console.error(err);
// }

// 5. Creating Directories
// Asynchronous: Use fs.mkdir() to create a new directory.

// fs.mkdir('FILESYSTEMMODULE/newDirectory', (err) => {
//   if (err) throw err;
//   console.log('Directory has been created!');
// });

// Synchronous: Use fs.mkdirSync() to create a new directory synchronously.

// try {
//   fs.mkdirSync('newDirectory');
//   console.log('Directory has been created!');
// } catch (err) {
//   console.error(err);
// }

// 6. Reading Directories
// Asynchronous: Use fs.readdir() to read the contents of a directory.

// fs.readdir('FILESYSTEMMODULE/newDirectory', (err, files) => {
//   if (err) throw err;
//   files.forEach(file => {
//     console.log(file);
//   });
// });

//Output new.txt

// Synchronous: Use fs.readdirSync() to read the contents of a directory synchronously.

// try {
//   const files = fs.readdirSync('someDirectory');
//   files.forEach(file => {
//     console.log(file);
//   });
// } catch (err) {
//   console.error(err);
// }

// Error Handling
//Note -> When working with the File System module, it’s essential to handle errors gracefully, especially when dealing with file operations that can fail (like reading a non-existent file).

// Example

// Read from example.txt
// fs.readFile('FILESYSTEMMODULE/example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
  
//   // Append text to the read data
//   const newData = data + '\nAppended text2.';
  
//   // Write the updated content to output.txt
//   fs.writeFile('FILESYSTEMMODULE/output.txt', newData, (err) => {
//     if (err) throw err;
//     console.log('Data has been written to output.txt!');
//   });
// });


// The fs module in Node.js is powerful and allows you to interact with the file system easily. You can perform various file operations, including reading, writing, appending, deleting files, and managing directories.


// Use Promises with file system operations
// The fs.promises API allows you to use async/await syntax, which can make your code cleaner and easier to read.

// Example
// import fs from 'fs/promises';

// 1. Read File
// Using fs.readFile() to read the contents of a file

// async function readFileExample() {
//   try {
//     const data = await fs.readFile('FILESYSTEMMODULE/example.txt', 'utf8');
//     console.log('File contents:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileExample();

// 2. Write File
// Using fs.writeFile() to write data to a file:

// async function writeFileExample() {
//   try {
//     await fs.writeFile('FILESYSTEMMODULE/output.txt', 'Hello, World!');
//     console.log('File has been written successfully.');
//   } catch (err) {
//     console.error('Error writing file:', err);
//   }
// }

// writeFileExample();

// 3. Append Data
// Using fs.appendFile() to append data to an existing file

// async function appendFileExample() {
//   try {
//     await fs.appendFile('FILESYSTEMMODULE/output.txt', '\nAppended text.');
//     console.log('Data has been appended to the file.');
//   } catch (err) {
//     console.error('Error appending to file:', err);
//   }
// }

// appendFileExample();

// 4. Delete File
// Using fs.unlink() to delete a file:

// async function deleteFileExample() {
//   try {
//     await fs.unlink('FILESYSTEMMODULE/output.txt');
//     console.log('File has been deleted successfully.');
//   } catch (err) {
//     console.error('Error deleting file:', err);
//   }
// }

// deleteFileExample();
// 5. Create Directory
// Using fs.mkdir() to create a new directory:

// async function createDirectoryExample() {
//   try {
//     await fs.mkdir('FILESYSTEMMODULE/newDirectory');
//     console.log('Directory has been created successfully.');
//   } catch (err) {
//     console.error('Error creating directory:', err);
//   }
// }

// createDirectoryExample();

// 6. Read Directory
// Using fs.readdir() to read the contents of a directory:

// async function readDirectoryExample() {
//   try {
//     const files = await fs.readdir('FILESYSTEMMODULE/newDirectory');
//     console.log('Files in the directory:', files);
//   } catch (err) {
//     console.error('Error reading directory:', err);
//   }
// }

// readDirectoryExample();


// Node.js File Operations: CommonJS, ES6, and Promises
// In Node.js, there are three ways to perform file operations:

// CommonJS Syntax:

// Usage: const fs = require('fs');
// Pros: Traditional and widely used; good for quick scripts.
// Cons: Callback-based, which can lead to "callback hell" and harder-to-read code.
// ES6 Syntax:

// Usage: import fs from 'fs';
// Pros: Modern and cleaner syntax; better module structure.
// Cons: Requires "type": "module" in package.json and may not be fully compatible with all libraries.
// Promise-Based (Using fs/promises):

// Usage: import fs from 'fs/promises';
// Pros: Cleaner and more readable code with async/await; simplifies error handling; avoids callback hell.
// Cons: Slightly more overhead in understanding Promises if you're new to them.
// Recommendation
// Use Promise-Based Methods: They provide a more modern approach to asynchronous programming, improving code readability and maintainability. The async/await syntax makes it easier to write and manage complex file operations without the pitfalls of nested callbacks.