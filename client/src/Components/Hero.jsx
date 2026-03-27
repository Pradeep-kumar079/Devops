import React from "react";
import "./Hero.css";
import poster from "../assets/poster.jpg";   // ✅ IMPORT

function Hero() {

  return (
    <section className="hero">

      <div className="hero-card">

        <div className="hero-left">
          <p className="hero-tag">Festival Offer</p>

          <h1>
            New Fashion <br />
            Collection 🔥
          </h1>

          <p className="hero-desc">
            Explore trending shirts, jeans & jackets at best prices.
          </p>

          <button className="hero-btn">Shop Now</button>
        </div>

        <div className="hero-right">
          <img src={poster} alt="poster" />
        </div>

      </div>

    </section>
  );
}

export default Hero;