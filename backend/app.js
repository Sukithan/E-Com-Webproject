const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Database connection (MySQL pool setup)
const pool = mysql.createPool({
  host: process.env.HOST,
  user: "root",
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Route to fetch product categories
app.get("/productcategory", (req, res) => {
  pool.query("SELECT * FROM products;", (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send("Database error.");
    }
    // If you are using a view engine, uncomment the following
    // res.render("pages/productcategory", { result: result });

    // For sending JSON data to the frontend:
    res.json(result);
  });
});

// Route setup
const userRoutes = require('./routes/userRoutes');
// const categoryRoutes = require('./routes/categoryRoutes');
// const productRoutes = require('./routes/productRoutes');

app.use('/', userRoutes);
// app.use('/', categoryRoutes);
// app.use('/', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
