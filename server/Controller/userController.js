const User = require("../Model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Products = require("../Model/productModel");

// ================= REGISTER =================
const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ⭐ hash password
    const hashpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashpassword
    });
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User Registered Successfully",
      token,
      user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= LOGIN =================
const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      message: "Login Successful",
      token: token,
      user: user
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

 
// const allproducts = async (req, res) => {
//   try {

//     const products = await Products.find();

//     res.status(200).json(products);

//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       message: "Internal server error"
//     });
//   }
// };

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


module.exports = { register, login};