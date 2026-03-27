import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");   // ⭐ auth check

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2>Fashion</h2>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <li><Link to="/home">Home</Link></li>
        <li>Products</li>
        <li>Offers</li>
        <li>Cart</li>

        {!token ? (
          <>
            <li className="nav-btn">
              <Link to="/login">Login</Link>
            </li>

            <li className="nav-btn">
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <li className="nav-btn" onClick={logout}>
            Logout
          </li>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;