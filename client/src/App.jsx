import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import ProductsPage from "./Admin/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />}/>

         //admin
        <Route path="/admin-allproducts" element={<ProductsPage />}/>
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;