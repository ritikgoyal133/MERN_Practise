// Streams
// Streams are a powerful feature in Node.js that allow you to read and write data efficiently. They provide a way to handle data that is too large to be processed all at once, enabling you to process it in chunks.

// Types of Streams
// Readable Streams: Used for reading data sequentially.
// Writable Streams: Used for writing data sequentially.
// Duplex Streams: Both readable and writable (e.g., TCP sockets).
// Transform Streams: A type of duplex stream where the output is computed based on input (e.g., zlib streams for compression).

// Working with Streams
// Readable Streams
// A readable stream allows you to read data from a source.

// const fs = require('fs');
// import fs from 'fs';

// In the context of Node.js streams, the on method is used to listen for events emitted by the stream. 
// const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

// 1. data event -> Triggered every time a chunk of data is available to be read. Chunk contains the current piece of data being read from the file. In the example, it logs each chunk to the console as it is received.
// Emitted when a chunk of data is available. Process the data chunk-by-chunk.
// readableStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// 2. end event -> Triggered once all the data has been read from the stream. It logs 'No more data.' to the console when the stream ends. Emitted when there is no more data to read. Indicates the end of the stream.
// readableStream.on('end', () => {
//   console.log('No more data.');
// });

// 3. error event -> The error event is emitted if there is any error encountered while reading from or writing to the stream. This can include issues such as file not found, permission errors, etc.
// Usage: You attach a listener to this event to handle any errors that might occur during the streaming process.
// Emitted when an error occurs. Handle errors gracefully.
// readableStream.on('error', (err) => {
//   console.error('Error:', err);
// });


// Writable Streams
// A writable stream allows you to write data to a destination.

// const writableStream = fs.createWriteStream('output.txt');

// writableStream.write('Hello, Ritik!\n');
// writableStream.write('Writing to a file using streams.\n');

// writableStream.end(); // Signal that no more data will be written

// writableStream.on('finish', () => {
//   console.log('All data has been written.');
// });

// writableStream.on('error', (err) => {
//   console.error('Error:', err);
// });

// Duplex Streams
// Duplex streams are both readable and writable. An example is a TCP socket connection.

// const net = require('net');
// import net from 'net';

//create a TCP Server
// const server = net.createServer((socket) => {
//   console.log('Client connected');
// //   net.createServer() creates a new TCP server. The callback function passed to it is executed every time a new client connects to the server. The socket object represents the connection to the client.

//   socket.on('data', (data) => {
//     console.log('Received data:', data.toString());
//     socket.write('Hello from server\n');
//   });
// //   The data event is triggered whenever the server receives data from the client. The callback function logs the received data and sends a response back to the client using.

//   socket.on('end', () => {
//     console.log('Client disconnected');
//   });

// //   The end event is triggered when the client disconnects from the server. The callback function logs a message indicating that the client has disconnected.

//   socket.on('error', (err) => {
//     console.error('Error:', err);
//   });

// //   The error event is triggered if there's an error with the connection. The callback function logs the error.
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
// server.listen(3000) starts the server and makes it listen on port 3000. The callback function logs a message when the server starts successfully.


// Transform Streams
// Transform streams are a type of duplex stream where the output is transformed based on the input. An example is using the zlib module to compress data.


// const zlib = require('zlib');
// const readableStream = fs.createReadStream('example.txt');
// const writableStream = fs.createWriteStream('example.txt.gz');
// const gzip = zlib.createGzip();

// readableStream.pipe(gzip).pipe(writableStream);

// writableStream.on('finish', () => {
//   console.log('File successfully compressed.');
// });

// writableStream.on('error', (err) => {
//   console.error('Error:', err);
// });

// Summary
// Readable Streams: For reading data sequentially.
// Writable Streams: For writing data sequentially.
// Duplex Streams: For both reading and writing.
// Transform Streams: For transforming data while reading and writing.

// Why Use Streams?
// 1. Memory Efficiency
// Without Streams: When you use fs.readFile, the entire file is read into memory before any processing begins. This can be problematic if you’re dealing with very large files, as it can lead to high memory usage and potential crashes due to insufficient memory.
// With Streams: Streams read data in small chunks, one piece at a time, without loading the entire file into memory. This is much more memory-efficient and allows you to handle very large files smoothly.

// 2.Speed:
// Without Streams: Since the entire file needs to be read into memory before processing starts, there’s a delay before any data can be processed.
// With Streams: Data can be processed as soon as the first chunk is received, potentially speeding up the time to process the first part of the file.

// 3. Real-Time Data Processing:
// Without Streams: You have to wait until the entire file is read into memory before you can begin processing the data.
// With Streams: You can process each chunk of data as it arrives, which is useful for real-time applications like video streaming or large data transfers.

// import fs from "fs";
// const data = JSON.parse(fs.readFileSync('product.json', 'utf-8'));
// const products = data.products;
// console.log(products);