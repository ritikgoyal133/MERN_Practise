const getAllUsers = (req, res) => {
  res.status(200).json({ message: "Hello Get!" });
};

const createUser = (req, res) => {
  res.status(201).json({ message: "Hello Post!" });
};

const updateUser = (req, res) => {
  res.status(200).json({ message: "Hello Patch!" });
};

const replaceUser = (req, res) => {
  res.status(200).json({ message: "Hello Put!" });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: "Hello Delete!" });
};

// We can export all fn with the help of single statemnet ES6 syntax
export { getAllUsers, createUser, updateUser, replaceUser, deleteUser };
