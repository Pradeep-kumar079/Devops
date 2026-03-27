import React from "react";
import "./Category.css";

import shoes from "../assets/hero.png";
import tshirt from "../assets/hero.png";
import pants from "../assets/poster.jpg";
import shirts from "../assets/react.svg";
import jackets from "../assets/vite.svg";
import hoodies from "../assets/react.svg";
import jeans from "../assets/hero.png";
import accessories from "../assets/poster.jpg";

const categories = [
  { name: "Shoes", image: shoes },
  { name: "Mens T-Shirts", image: tshirt },
  { name: "Pants", image: pants },
  { name: "Shirts", image: shirts },
  { name: "Jackets", image: jackets },
  { name: "Hoodies", image: hoodies },
  { name: "Jeans", image: jeans },
  { name: "Accessories", image: accessories }
];

const Category = () => {
  return (
    <section className="category-section">

      <h2 className="category-title">Shop By Category</h2>

      <div className="category-row">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Category;