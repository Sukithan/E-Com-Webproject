const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require("express-session");
require('dotenv').config();

const app = express();

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true 
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));


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

// Cart Start

function isProductInCart(cart, id) {
  return cart.some(item => item.id === id);
}

// Calculate total
function calculateTotal(cart, req) {
  let total = 0;
  for (let item of cart) {
    total += (item.price || 0) * (item.count || 0); // Ensured safe access
  }
  req.session.total = total;
  return total;
}

app.post("/addCart", (req, res) => {
  const { id, name, price, count } = req.body;
  const product = { id, name, price, count };

  // Initialize the cart if it doesn't exist
  if (!req.session.cart) {
    req.session.cart = [];
  }

  const cart = req.session.cart;
  const productInCart = cart.find(item => item.id === id);

  if (productInCart) {
    productInCart.count += count; // Update quantity if product already in cart
  } else {
    cart.push(product); // Add new product to cart
  }

  calculateTotal(cart, req); // Update total
  console.log('Current session after adding to cart:', req.session);
  console.log('Session ID on addCart:', req.session.id); 
   // Debugging line

  // Send back the updated cart and total
  res.json({ cart: req.session.cart, total: req.session.total });
});


app.get("/cart", (req, res) => {
  console.log('Current session on cart fetch:', req.session); // Debugging line
  console.log('Session ID on cart fetch:', req.session.id);
  const cart = req.session.cart || [];
  const total = req.session.total || 0;
  res.json({ cart, total });
});


// Remove product from cart
app.post("/removeProduct", (req, res) => {
  const { id } = req.body;
  const cart = req.session.cart || [];

  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1); // Remove the product
    const total = calculateTotal(cart, req); // Recalculate total
    return res.json({ cart, total }); // Respond with updated cart and total
  }

  res.status(204).send(); // Respond with no content if not found
});

// Edit product quantity in cart
app.post("/EditQuantity", (req, res) => {
  const { id, Increase, Decrease } = req.body;
  const cart = req.session.cart || [];

  const itemIndex = cart.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    if (Increase) {
      cart[itemIndex].count += 1; // Increment the quantity
    }
    if (Decrease) {
      if (cart[itemIndex].count > 1) {
        cart[itemIndex].count -= 1; // Decrement the quantity
      } else {
        cart.splice(itemIndex, 1); // Remove item from cart
      }
    }
  }

  calculateTotal(cart, req);
  res.json({ message: "Quantity updated", cart, total: req.session.total });
});

// Cart End


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
