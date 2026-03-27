const express = require("express");
const router = express.Router();

const { register , login , allproducts , getsingleproduct} = require("../Controller/userController");

router.post("/register", register);
router.post("/login", login);


// router.get("/all-products", allproducts);
// router.get("/all-products/:id",getsingleproduct)
module.exports = router;