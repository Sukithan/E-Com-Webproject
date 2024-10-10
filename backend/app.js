const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
//const mysql = require('mysql2');

// It allows the server to handle requests from different origins, typically used to allow frontend apps (hosted on different domains) to communicate with your backend.
app.use(cors());
// This middleware allows the server to parse JSON bodies of incoming requests.
app.use(express.json());

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost', // MySQL server address
//   user: 'root',      // Replace with your MySQL username
//   password: 'sniperrifle',  // Replace with your MySQL password
//   database: 'cstore_db'   // Replace with your MySQL database name
// });

// app.post("/createUser", (req,res) => {
//     const firstname = req.body.firstname;
//     const lastname = req.body.lastname;
//     const email = req.body.email;
//     const password = req.body.password;

//     connection.query(
//         "INSERT INTO registered_customer (first_name,last_name,email,password_hash,address_id, phone_number) VALUES (?,?,?,?,?,?)", 
//         [firstname,lastname,email,password,1,123456789], 
//         (err,result) => {
//             if (err){
//                 console.log(err);
//             }
//             else{
//                 res.send("Value Inserted!");
//             }
//         }
//     )
// });

// app.get("/Login",(req,res)=>{
//     const email = req.body.email;
//     const password = req.body.password;

//     connection.query("SELECT * FROM registered_customer W")
// })

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// const express = require('express');
// const app = express();
const userRoutes = require('./routes/userRoutes');

// app.use(express.json());

// Use the user routes for all /api/users endpoints
app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
