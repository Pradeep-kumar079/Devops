import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password }
    );

    const { token, user } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("role", user.role);   // ⭐ store role

    alert("Login Successful");

    // ⭐ ROLE BASED NAVIGATION
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }

  } catch (err) {

    alert(err.response?.data?.message || "Login Failed");

  }
};

  return (
    <div className="login-container">

      <form className="login-card" onSubmit={handleLogin}>

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue shopping</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>

        <p className="register-text">
          Don’t have an account?
          <Link to="/register"> Register</Link>
        </p>

      </form>

    </div>
  );
};

export default LoginPage;