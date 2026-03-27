import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {

  return (
    <Link
      to={`/product/${product._id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="product-card">

        <img
          src={`http://localhost:5000/uploads/${product.image}`}
          alt={product.name}
        />

        <h3>{product.name}</h3>

        <p>₹ {product.price}</p>

        <button>Add To Cart</button>

      </div>
    </Link>
  );
};

export default ProductCard;