import React from "react";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-container">

      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>Fashion Admin</h2>

        <ul>
          <li>Dashboard</li>
          <li><a href="/admin-allproducts">Products</a></li>
          <li>Orders</li>
          <li>Users</li>
          <li>Offers</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="admin-main">

        <div className="admin-topbar">
          <h1>Dashboard</h1>
          <input placeholder="Search products..." />
        </div>

        {/* Cards */}
        <div className="admin-cards">

          <div className="card">
            <h3>Total Products</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Total Orders</h3>
            <p>85</p>
          </div>

          <div className="card">
            <h3>Total Users</h3>
            <p>450</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>₹ 1,25,000</p>
          </div>

        </div>

        {/* Table */}
        <div className="admin-table">
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#123</td>
                <td>Pradeep</td>
                <td>Black Shirt</td>
                <td className="status">Delivered</td>
              </tr>

              <tr>
                <td>#124</td>
                <td>Rahul</td>
                <td>Denim Jacket</td>
                <td className="pending">Pending</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminPage;