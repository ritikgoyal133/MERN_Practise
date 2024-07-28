export const getAllProducts = (req, res) => {
  res.status(200).json({ message: "Hello Get!" });
};

export const createProduct = (req, res) => {
  res.status(201).json({ message: "Hello Post!" });
};

export const updateProduct = (req, res) => {
  res.status(200).json({ message: "Hello Patch!" });
};

export const replaceProduct = (req, res) => {
  res.status(200).json({ message: "Hello Put!" });
};

export const deleteProduct = (req, res) => {
  res.status(200).json({ message: "Hello Delete!" });
};

// We can export all fn with the help of single statemnet ES6 syntax 
// export {
//   getAllProducts,
//   createProduct,
//   updateProduct,
//   replaceProduct,
//   deleteProduct,
// };
