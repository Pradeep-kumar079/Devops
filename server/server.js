const express = require("express");
require("dotenv").config();
const cors = require("cors");   // ⭐ ADD THIS

const { ConnectDb } = require("./Config/Db");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes")

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));


app.use(cors({                 // ⭐ ADD THIS
  origin: "http://localhost:3000",
  credentials: true
}));

// database
ConnectDb();

// routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is live on ${PORT}`);
});