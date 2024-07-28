import express from "express";
const app = express();

// Middleware in Express.js refers to functions that execute during the lifecycle of a request to the server. These functions have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

// Middleware in Express.js functions as a series of processing steps that a request goes through before it reaches the final route handler. Here's a breakdown of what you described.

// Middleware Flow
// 1. Client Request: A request is made from the client to the server.
// 2. Middleware Chain:
// The request passes through one or more middleware functions. Each middleware can:
// Validate the request (e.g., check authentication, validate data).
// Modify the request or response objects (e.g., add properties to req or res).
// Terminate the request-response cycle (e.g., send a response directly without calling the next middleware).
// Pass Control to the next middleware function in the stack by calling next().
// 3. Route Handler: If the request passes through all middleware successfully, it reaches the route handler, which processes the request and sends a response.
// 4. Response Sent: The response is sent back to the client.

// Types of Middleware
// 1. Application-level Middleware: Applies to all routes.
// 2. Router-level Middleware: Applies to specific routers.
// 3. Error-handling Middleware: Catches and handles errors. Built-in Middleware: Provided by Express (e.g., express.json()).
// 4. Third-party Middleware: Created by the community (e.g., morgan, cors).

// app.use() -> The app.use() function is a method provided by Express.js to mount middleware functions.

// How to use middleware in express.js
// app.use(middlewareFunction): Applies the middleware function to all routes and methods in the application.
// app.use(path, middlewareFunction): Applies the middleware function only to routes that match the specified path or path pattern.
// app.use('/admin', logger);
// We can apply middleware to specific routes or groups of routes in Express.js.
// Apply logger middleware only to the /admin route
// app.get("/admin", logger, (req, res) => {
//   res.send("Welcome to the admin panel");
// });

// 1. Application-level Middleware
// This middleware is bound to your Express app using app.use() or app.METHOD(), where METHOD is an HTTP method like get, post, etc.

// A simple logger middleware
// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next(); // Pass control to the next middleware
// };

// app.use(logger);

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

//Output
// localhost:8080
//GET /
//Hello, World!

// 2. Router-level Middleware
// This middleware works on an instance of express.Router().
const router = express.Router();

// Router-level middleware
// const routerLogger = (req, res, next) => {
//   console.log(`Router-level: ${req.method} ${req.url}`);
//   next();
// };

// router.use(routerLogger);

// router.get('/hello', (req, res) => {
//   res.send('Hello from router!');
// });

// app.use('/api', router);

// 3. Error-handling Middleware
// This middleware handles errors in your application. It must have four parameters: (err, req, res, next).

// Middleware that throws an error
// app.use((req, res, next) => {
//   const error = new Error('Something went wrong!');
//   next(error); // Pass the error to the next middleware
// });

// // Error-handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Internal Server Error');
// });

// 4. Built-in Middleware
// Express has some built-in middleware functions for common tasks.

// Built-in middleware to parse JSON requests
// app.use(express.json());

// // Built-in middleware to serve static files from "public" folder
// app.use(express.static('public'));

// app.post('/data', (req, res) => {
//   res.json(req.body);
// });

// 5. Third-party Middleware
// There are many middleware functions provided by the community, like morgan for logging, body-parser for parsing request bodies, etc.
// npm install morgan
// morgan is a middleware for logging HTTP requests in Node.js and Express applications. It provides a simple and configurable way to log details about incoming HTTP requests and the responses sent by the server. morgan comes with several predefined logging formats like combined, common, dev, short, and tiny. Each format provides different levels of detail about the request and response.
import morgan from 'morgan';

// Use morgan for logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
