// The Node.js event loop is a key feature that enables non-blocking I/O operations. It allows Node.js to perform many operations concurrently without multithreading, which is a core part of its architecture.

// How the Event Loop Works
// 1. Single-Threaded Model
// Node.js operates on a single-threaded model, which means it uses a single main thread to execute JavaScript code. However, it can handle multiple operations by offloading asynchronous tasks (like file I/O, network requests, etc.) to the system.

//2. Phases of the Event Loop:
// The event loop consists of multiple phases, each with its own queue of tasks to execute.
// Timers: Executes callbacks for setTimeout() and setInterval().
// I/O Callbacks: Executes almost all callbacks that were deferred to the next iteration of the event loop.
// Idle, Prepare: Internal use only; you can generally ignore this phase.
// Poll: Retrieves new I/O events; executes I/O-related callbacks. If there are no I/O tasks, it will check for timers.
// Check: Executes callbacks for setImmediate().
// Close Callbacks: Executes close event callbacks, like for closed sockets.

// 3. Asynchronous Execution
// When an asynchronous operation (like reading a file) is initiated, Node.js sends the operation to the system and continues executing other code. When the operation is complete, its callback is added to the relevant phase of the event loop.
// Example of the Event Loop in Action

const fs = require('fs');

console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

setTimeout(() => {
  console.log('Timeout 2');
}, 100);

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File contents:', data);
});

console.log('End');

//Output
// Start
// End
// File contents: (data from the file)
// Timeout 1
// Timeout 2

// Explanation of the Output
// Start and End are logged first because they are synchronous.
// The file read operation is asynchronous, so its callback is queued to execute when the I/O phase is reached.
// setTimeout(() => { console.log('Timeout 1'); }, 0); will run after the synchronous code is completed but before the I/O callbacks, as it is scheduled in the timer phase.
// Finally, setTimeout(() => { console.log('Timeout 2'); }, 100); will run after 100 milliseconds.
// Summary
// The Node.js event loop allows asynchronous operations to run without blocking the main thread.
// It consists of multiple phases where different types of callbacks are executed.


// Understanding the Queues

// Call Stack -> This is where the synchronous code is executed. When a function is called, it gets pushed onto the stack, and when it returns, it’s popped off.

// Web APIs -> When you invoke an asynchronous operation (like a network request or a timer), it is sent to the Web APIs (or system APIs) that handle those tasks. Once the operation is complete, the callback associated with it is queued for execution.

// Callback Queues -> There are two main types of queues for asynchronous callbacks

// Microtask Queue -> This is where promises and mutation observer callbacks are placed. It has higher priority.
// Macrotask Queue -> This is where callbacks from setTimeout, setInterval, and I/O events are placed.

// Event Loop Execution Order
// The event loop operates in the following order:
// It processes all tasks in the call stack.
// Once the call stack is empty, it first checks the microtask queue.
// If there are any tasks in the microtask queue (like promise callbacks), they are executed until the queue is empty.
// After the microtask queue is empty, the event loop checks the macrotask queue.
// It processes one task from the macrotask queue (like a timeout or interval).
// This cycle continues, alternating between microtasks and macrotasks.

// Example 
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1'); // Macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1'); // Microtask
// });

// setTimeout(() => {
//   console.log('Timeout 2'); // Macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 2'); // Microtask
// });

// console.log('End');
// Output
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2


// Explanation of the Output
// Start and End are logged first because they are synchronous.
// Promise 1 and Promise 2 are logged next, as they are microtasks and are processed before any macrotasks.
// Finally, Timeout 1 and Timeout 2 are logged after all the microtasks have been processed.

// Summary
// Microtasks (like promises) have higher priority and are executed before macrotasks (like timeouts).
// The event loop will always check the microtask queue before processing the macrotask queue.

// In the context of the Node.js event loop, both setInterval and I/O operations (like file read/write) fall under the macrotask queue. However, there’s an important distinction in how they’re managed:

// Execution Order in the Event Loop
// I/O Operations -> When you perform I/O operations (such as reading from a file), Node.js will process those callbacks during the I/O callbacks phase of the event loop. These callbacks are queued up after the timers and before the check phase.

// Timers (setTimeout and setInterval) -> Callbacks from setTimeout and setInterval are scheduled in the macrotask queue (timers phase). They are executed in the order they were set, but only after all synchronous code and microtasks (from the microtask queue) have been executed.

// Detailed Flow

// Synchronous Code: Executes first.
// Microtask Queue: Any resolved promises or microtasks are processed next.
// Timers:
// The event loop will check the timer queue and execute any callbacks from setTimeout or setInterval that are ready to be executed.
// I/O Callbacks:
// After processing the timers, the event loop will execute any I/O callbacks that are ready. This includes callbacks for file read/write operations.

// Summary
// In the event loop:

// Microtasks are prioritized over macrotasks.
// Among macrotasks, I/O operations are handled after timers (like setTimeout and setInterval).
// So, if there are both setInterval and I/O operations queued, the event loop will handle them in this order:
// Complete synchronous code,
// Process microtasks,
// Execute any timers from setTimeout or setInterval,
// Finally, execute I/O operation callbacks.