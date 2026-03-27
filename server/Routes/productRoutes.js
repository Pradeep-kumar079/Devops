const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/upload");

const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getSingleProduct
  

} = require("../Controller/productController.js");

router.post("/", upload.array("image",5), addProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", upload.array("image",5), updateProduct);

module.exports = router;