import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css"

const ProductGrid = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-grid">

      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}

    </div>
  );
};

export default ProductGrid;