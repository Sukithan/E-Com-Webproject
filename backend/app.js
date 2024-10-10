const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// It allows the server to handle requests from different origins, typically used to allow frontend apps (hosted on different domains) to communicate with your backend.
app.use(cors());
// This middleware allows the server to parse JSON bodies of incoming requests.
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

// Use the user routes for all /api/users endpoints
app.use('/', userRoutes);
app.use('/', categoryRoutes);
app.use('/',productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
