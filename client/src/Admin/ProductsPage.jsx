import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css";

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name:"",
    brand:"",
    category:"",
    size:"",
    color:"",
    material:"",
    price:"",
    images:null
  });

  const fetchProducts = async ()=>{
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(()=>{
    fetchProducts();
  },[]);

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ✅ MULTIPLE FILE HANDLER
  const handleFile = (e)=>{
    setForm({
      ...form,
      images:e.target.files
    });
  };

  const handleSaveProduct = async ()=>{

    const formData = new FormData();

    formData.append("name",form.name);
    formData.append("brand",form.brand);
    formData.append("category",form.category);
    formData.append("material",form.material);
    formData.append("color",form.color);
    formData.append("size",form.size);
    formData.append("price",form.price);

    // ✅ APPEND MULTIPLE IMAGES
    if(form.images){
      for(let i=0;i<form.images.length;i++){
        formData.append("images", form.images[i]);
      }
    }

    if(editId){
      await axios.put(
        `http://localhost:5000/api/products/${editId}`,
        formData
      );
    }else{
      await axios.post(
        "http://localhost:5000/api/products",
        formData
      );
    }

    fetchProducts();

    setShowForm(false);
    setEditId(null);
  };

  const handleEdit = (p)=>{
    setShowForm(true);
    setEditId(p._id);

    setForm({
      name:p.name,
      brand:p.brand,
      category:p.category,
      size:p.size.join(","),
      color:p.color,
      material:p.material,
      price:p.price,
      images:null
    });
  };

  const handleDelete = async (id)=>{
    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );
    fetchProducts();
  };

  return (
    <div className="products-container">

      <div className="crud-bar">
        <h2>Manage Products</h2>

        <button
          className="add-btn"
          onClick={()=>setShowForm(!showForm)}
        >
          + Add Product
        </button>
      </div>

      {showForm && (
        <div className="product-form">

          <input name="name" value={form.name} placeholder="Name" onChange={handleChange}/>
          <input name="brand" value={form.brand} placeholder="Brand" onChange={handleChange}/>
          <input name="category" value={form.category} placeholder="Category" onChange={handleChange}/>
          <input name="size" value={form.size} placeholder="Sizes S,M,L" onChange={handleChange}/>
          <input name="color" value={form.color} placeholder="Color" onChange={handleChange}/>
          <input name="material" value={form.material} placeholder="Material" onChange={handleChange}/>
          <input name="price" value={form.price} placeholder="Price" onChange={handleChange}/>

          {/* ✅ MULTIPLE FILE INPUT */}
          <input type="file" multiple onChange={handleFile}/>

          <button className="save-btn" onClick={handleSaveProduct}>
            {editId ? "Update Product" : "Save Product"}
          </button>

        </div>
      )}

      <div className="products-grid">

        {products.map(p=>(
          <div key={p._id} className="product-card">

            {/* ✅ SHOW FIRST IMAGE */}
            <img
              src={`http://localhost:5000/uploads/${p.images?.[0]}`}
              alt=""
            />

            <h3>{p.name}</h3>
            <p>{p.brand}</p>
            <p>₹ {p.price}</p>

            <div className="card-actions">

              <button
                className="edit-btn"
                onClick={()=>handleEdit(p)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={()=>handleDelete(p._id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ProductsPage;