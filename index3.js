import express from "express";

const app = express();

//Middleware for body parser
app.use(express.json());

const getAllProducts = (req, res) => {res.status(200).json({"message":"Hello Get!"})};
const createProduct = (req, res) => {res.status(201).json({"message":"Hello Post!"})};
const updateProduct = (req, res) => {res.status(200).json({"message":"Hello Patch!"})};
const replaceProduct = (req, res) => {res.status(200).json({"message":"Hello Put!"})};
const deleteProduct = (req, res) => {res.status(200).json({"message":"Hello Delete!"})};

// CRUD
//Get
app.get("/products",getAllProducts);
//Post
app.post("/products",createProduct);
//Patch
app.patch("/products/:id", updateProduct);
//Put
app.put("/products/:id",replaceProduct);
//Delete
app.delete("/products/:id",deleteProduct);
app.listen(8080, () => {
    console.log('Server is running on port 8080');
})