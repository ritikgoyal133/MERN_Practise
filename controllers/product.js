import Product  from "../models/product.js";

// Read
export const getAllProducts = async (req, res) => {
  try {
    const findProduct = await Product.find();
    res.status(200).json({ message: "Products fetched!", products: findProduct });
  } catch (err) {
    res.status(500).json({ message: "Error while fetching products", error: err.message });
  }
};

//Read
export const getProduct = async (req, res) => {
  try {
    //Object Destructuring
    const { id } = req.params; // Get the product ID from the request parameters
    const findProduct = await Product.findById(id).exec();
    
    if (!findProduct) {
      return res.status(404).json({ message: "Product not found!" }); // Handle case where product doesn't exist
    }

    res.status(200).json({ message: "Product fetched!", product: findProduct });
  } catch (err) {
    res.status(500).json({ message: "Error while fetching product", error: err.message });
  }
};

//Create
export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  // product.title = "Mobile";
  // product.price = 100000;

  //For save the data to db
  //save method no longer accepts callback. It return promise.
  try {
    const savedProduct = await product.save();
    res.status(201).json({ message: "Product created!", product: savedProduct });
  } catch (err) {
    res.status(500).json({ message: "Error saving product", error: err });
  }
};

//Update
export const updateProduct = async (req, res) => {
  const { id } = req.params; // Destructure id from req.params
  const updatedData = req.body; // Get the updated data from the request body

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true }); // Update the product
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" }); // Handle case when product is not found
    }
    res.status(200).json({ message: "Product updated!", product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: "Error while updating product", error: err.message });
  }
};

//Replace
export const replaceProduct = async (req, res) => {
  const { id } = req.params; // Destructure id from req.params
  const replacementData = req.body; // Get the replacement data from the request body

  try {
    const replacedProduct = await Product.findOneAndReplace({ _id: id }, replacementData, { new: true }) // Replace the product
    if (!replacedProduct) {
      return res.status(404).json({ message: "Product not found" }); // Handle case when product is not found
    }
    res.status(200).json({ message: "Product replaced!", product: replacedProduct });
  } catch (err) {
    res.status(500).json({ message: "Error while replacing product", error: err.message });
  }
};

//Delete
export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Destructure id from req.params

  try {
    const deletedProduct = await Product.findByIdAndDelete(id); // Delete the product
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" }); // Handle case when product is not found
    }
    res.status(200).json({ message: "Product deleted!", product: deletedProduct });
  } catch (err) {
    res.status(500).json({ message: "Error while deleting product", error: err.message });
  }
};

// Note -> Using { new: true } allows you to receive the latest version of the document after performing the update or replacement, which can be helpful for confirming the changes made or for sending the updated document back in the API response.

// We can export all fn with the help of single statemnet ES6 syntax 
// export {
//   getAllProducts,
//   createProduct,
//   updateProduct,
//   replaceProduct,
//   deleteProduct,
// };
