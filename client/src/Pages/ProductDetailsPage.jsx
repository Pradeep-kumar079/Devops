import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetailsPage = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {

    const res = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    setProduct(res.data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-details">

      <div className="details-left">

        <img
          src={`http://localhost:5000/uploads/${product.image}`}
          alt=""
        />

      </div>

      <div className="details-right">

        <h2>{product.name}</h2>

        <h3>₹ {product.price}</h3>

        <p><b>Brand:</b> {product.brand}</p>
        <p><b>Material:</b> {product.material}</p>
        <p><b>Color:</b> {product.color}</p>

        <button className="buy-btn">Add To Cart</button>

      </div>

    </div>
  );
};

export default ProductDetailsPage;