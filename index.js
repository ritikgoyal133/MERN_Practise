import http from "http";
import fs from "fs";
import express from "express";
import morgan from "morgan";
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

// Middleware to parse JSON bodies
app.use(express.json());

//Read Get products
//CRUD

//Read
app.get("/products", (req, res) => {
  // res.send("Hello, GET request!");
  // res.json(products);
  res.json({"name":"Ram"});
  //res.json() is a method in Express.js that sends a JSON response to the client. It is a convenience method that automatically sets the Content-Type header of the response to application/json and sends the response body as a JSON string.
});

//Get perticular product
app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const product = products.find((product) => product.id === id);
  res.json(product);
});

//POST Create Product
//Create
app.post('/products', (req, res) => {
  console.log(req.body);
  products.push(req.body);

  const writableStream = fs.createWriteStream('output.txt');
  writableStream.write(JSON.stringify(products, null, 2)); // Convert array to JSON string
  // JSON.stringify(products, null, 2) to convert the products array to a JSON string. The second parameter null and the third parameter 2 are used for pretty-printing the JSON with an indentation of 2 spaces.
  writableStream.end();

  writableStream.on('finish', () => {
    // res.json(req.body);
    res.status(201).json(req.body);
  });

  writableStream.on('error', (err) => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  });
});

//Update the product
//PUT (Update an existing resource)
app.put("/products/:id", (req, res) => {
  console.log(req.body);
  res.status(200).json({"mesage":"Hello, PUT request!"});
});

//Update the product
//PATCH (Partially update an existing resource)
app.patch("/products/:id", (req, res) => {
  console.log(req.body);
  res.status(200).json({"mesage":"Patch Request, data updated partially!"});
});

app.delete("/products/:id", (req, res) => {
  res.status(200).send({"message":"Hello, DELETE request!"});
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

