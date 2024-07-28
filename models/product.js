import mongoose from "mongoose";
const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number,
//   },
// });

const productSchema = new Schema({
  name: {
    type: String,
    required: true, //this data should be present otherwise throw error
  },
  description: String, //when defined datatype in this way if data comes as number it will convert in string
  price: Number,
  category: String,
  stock: Number,
  rating: Number,
  image: String,
});

//Export the Product Model
const Product = mongoose.model("Product", productSchema);

export default Product;
