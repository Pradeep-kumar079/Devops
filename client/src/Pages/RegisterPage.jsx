import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const RegisterPage = () => {

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        form
      );

      alert(res.data.message);

      navigate('/home');

    }catch(err){
      alert(err.response?.data?.message || "Error");
    }
  }

  return (
    <div className="register-container">

      <form className="register-card" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button className="register-btn" type="submit">
          Register
        </button>

        <p className="login-text">
          Already have account?
          <Link to="/login"> Login</Link>
        </p>

      </form>

    </div>
  );
};

export default RegisterPage;