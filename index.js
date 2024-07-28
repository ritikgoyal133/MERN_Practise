import http from "http";
import fs from "fs";
import express from "express";
// const express = require('express')

const app = express(); //This is an instance of an Express.js application.

let indexFile;
try {
  indexFile = fs.readFileSync("index.html", "utf-8");
} catch (err) {
  console.error("Error reading index.html:", err);
  process.exit(1);
}

let products;
try {
  const data = JSON.parse(fs.readFileSync("product.json", "utf-8"));
  products = data.products;
} catch (err) {
  console.error("Error reading index.html:", err);
  process.exit(1);
}

// Important Method for Routing
// app.get(): Defines a route that listens for GET requests.
// app.post(): Defines a route that listens for POST requests.
// app.put(): Defines a route that listens for PUT requests.
// app.delete(): Defines a route that listens for DELETE requests.
// app.patch(): Defines a route that listens for PATCH requests.
// app.all(): Matches all HTTP methods.
// app.use(): Mounts middleware functions at a specified path.

// Important Methods:
// app.get(): Handles GET requests to retrieve data from the server.
// app.post(): Handles POST requests to submit data to the server.
// app.put(): Handles PUT requests to update existing data on the server.
// app.delete(): Handles DELETE requests to delete data from the server.

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//     //This is an Express.js method that provides a more convenient way to send a response. It can send a variety of responses, including strings, objects, and arrays. It automatically sets the Content-Type based on the response type and can also convert objects to JSON.
// })

//API-endpoint-route
app.get("/", (req, res) => {
  res.send("Hello, GET request!");
});

app.post("/", (req, res) => {
  res.send("Hello, POST request!");
});

app.put("/user", (req, res) => {
  res.send("Hello, PUT request!");
});

app.delete("/user", (req, res) => {
  res.send("Hello, DELETE request!");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

