// Error handling is crucial for building robust applications. In Node.js, we can handle errors in both synchronous and asynchronous code.

//1.Synchronous Error Handling -> For synchronous code, we can use try-catch blocks to catch errors

// function readFileSyncExample() {
//   const fs = require('fs');
//   try {
//     const data = fs.readFileSync('example.txt', 'utf8');
//     console.log('File contents:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileSyncExample();

// 2. Asynchronous Error Handling with Callbacks -> For asynchronous code using callbacks, you typically check for errors as the first parameter

// const fs = require('fs');
// function readFileAsyncExample() {
//   fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return; // Exit the function if there's an error
//     }
//     console.log('File contents:', data);
//   });
// }

// readFileAsyncExample();

// 3. Asynchronous Error Handling with Promises -> With Promise-based methods, you can use .catch() to handle errors

// const fs = require('fs/promises');

// async function readFilePromiseExample() {
//   try {
//     const data = await fs.readFile('example.txt', 'utf8');
//     console.log('File contents:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFilePromiseExample();

// Summary of Error Handling
// Synchronous: Use try-catch for synchronous operations.
// Asynchronous with Callbacks: Check for errors in the callback.
// Asynchronous with Promises: Use try-catch with async/await or .catch() for error handling.

//Handle Multiple Promises Error
// When working with multiple promises in Node.js, we can manage errors in several ways, depending on how we are handling the promises. Here are a few common approaches
// 1. Using Promise.all() -> When using Promise.all(), if any promise rejects, the entire Promise.all() will reject, and we can catch the error

// import fs from 'fs/promises';
// async function readMultipleFiles() {
//   try {
//     const [data1, data2] = await Promise.all([
//       fs.readFile('file1.txt', 'utf8'),
//       fs.readFile('file2.txt', 'utf8')
//     ]);
//     console.log('File 1 contents:', data1);
//     console.log('File 2 contents:', data2);
//   } catch (err) {
//     console.error('Error reading one of the files:', err);
//   }
// }

// readMultipleFiles();

// 2. Using Promise.allSettled() -> If you want to wait for all promises to settle (either resolve or reject) without failing immediately on the first rejection, you can use Promise.allSettled(). This will return an array of results, which will contain the status (fulfilled or rejected) of each promise:

// async function readMultipleFilesSettled() {
//   const results = await Promise.allSettled([
//     fs.readFile('file1.txt', 'utf8'),
//     fs.readFile('file2.txt', 'utf8')
//   ]);

//   results.forEach((result, index) => {
//     if (result.status === 'fulfilled') {
//       console.log(`File ${index + 1} contents:`, result.value);
//     } else {
//       console.error(`Error reading file ${index + 1}:`, result.reason);
//     }
//   });
// }

// readMultipleFilesSettled();

// 3. Using try-catch with Individual Promises -> We can also handle errors for each promise individually, though this can lead to repetitive code

// async function readFilesIndividually() {
//   try {
//     const data1 = await fs.readFile('file1.txt', 'utf8');
//     console.log('File 1 contents:', data1);
//   } catch (err) {
//     console.error('Error reading file 1:', err);
//   }

//   try {
//     const data2 = await fs.readFile('file2.txt', 'utf8');
//     console.log('File 2 contents:', data2);
//   } catch (err) {
//     console.error('Error reading file 2:', err);
//   }
// }

// readFilesIndividually();

// Summary
// Promise.all(): Fails fast on the first rejection; catch errors collectively.
// Promise.allSettled(): Waits for all promises to settle; handles individual results.
// Try-Catch with Individual Promises: Catches errors for each promise individually, but can lead to repetitive code.
// Using Promise.allSettled() is particularly useful when you want to execute multiple asynchronous tasks and handle the results regardless of their success or failure.









