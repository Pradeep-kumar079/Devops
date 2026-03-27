const mongoose = require("mongoose");
const Product = require("../Model/productModel");

// ADD
// const addProduct = async (req, res) => {
//   try {

//     const {
//       name,
//       brand,
//       category,
//       material,
//       color,
//       size,
//       price
//     } = req.body;

//     const product = await Product.create({
//       name,
//       brand,
//       category,
//       material,
//       color,
//       size: size.split(","),
//       price,
//       images: req.files?.filename
//     });

//     res.status(201).json(product);

//   } catch (error) {
//     res.status(500).json({ message:error.message });
//   }
// };
const addProduct = async (req, res) => {
  try {

    const {
      name,
      brand,
      category,
      material,
      color,
      size,
      price
    } = req.body;

    const imagePaths = req.files.map(file => file.filename);

    const product = await Product.create({
      name,
      brand,
      category,
      material,
      color,
      size: size.split(","),
      price,
      images: imagePaths
    });

    res.status(201).json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};


// GET
const getProducts = async (req, res) => {

  const products = await Product.find().sort({ createdAt:-1 });

  res.json(products);
};


// DELETE
const deleteProduct = async (req, res) => {

  await Product.findByIdAndDelete(req.params.id);

  res.json({ message:"Deleted" });

};


// UPDATE
// const updateProduct = async (req, res) => {

//   const {
//     name,
//     brand,
//     category,
//     material,
//     color,
//     size,
//     price
//   } = req.body;

//   const updated = await Product.findByIdAndUpdate(
//     req.params.id,
//     {
//       name,
//       brand,
//       category,
//       material,
//       color,
//       size: size.split(","),
//       price,
//       ...(req.file && { images: req.file.filename })
//     },
//     { new:true }
//   );

//   res.json(updated);
// };
const updateProduct = async (req, res) => {

  try {

    const {
      name,
      brand,
      category,
      material,
      color,
      size,
      price
    } = req.body;

    const updateData = {
      name,
      brand,
      category,
      material,
      color,
      size: size.split(","),
      price
    };

    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map(f => f.filename);
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new:true }
    );

    res.json(updated);

  } catch (error) {

    console.log(error);
    res.status(500).json({ message:"Update error" });

  }

};


const allproducts = async (req, res) => {
  try {

    const products = await Products.find();

    res.status(200).json(products);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
};

// const getsingleproduct = async (req, res) => {
//   try {

//     const { id } = req.params;

//     const product = await Products.findById(id);

//     if (!product) {
//       return res.status(404).json({
//         message: "Product not found"
//       });
//     }

//     res.status(200).json(product);

//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       message: "Server error"
//     });
//   }
// };

const getSingleProduct = async (req, res) => {
  try {

    const { id } = req.params;

    // ⭐ validate id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Product ID"
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    return res.status(200).json(product);

  } catch (error) {

    console.log("Single Product Error:", error);

    return res.status(500).json({
      message: "Server Error"
    });

  }
};

module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  allproducts,
  getSingleProduct
};