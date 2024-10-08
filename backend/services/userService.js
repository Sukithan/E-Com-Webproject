const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Signup logic: create a new user and hash the password
exports.signup = async (firstname, lastname, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql1 = 'INSERT INTO registered_customer (first_name, last_name, email, password_hash, address_id, phone_number) VALUES (?, ?, ?, ?, ?, ?)';
  db.execute(sql1, [firstname, lastname, email, hashedPassword, 1, 123456789]);

  const sql2 = 'SELECT * FROM registered_customer WHERE email = ?';
  const [user] = await db.execute(sql2, [email]);
  const token = jwt.sign({ id: user[0].customer_id, email: user[0].email }, process.env.JWT_SECRET, { expiresIn: '24h' });
  //const token = jwt.sign({ id: user[0].id, email: user[0].email }, 'hi123', { expiresIn: '24h' });
  return token;
};

// Login logic: authenticate a user
exports.login = async (email, password) => {

  const sql = 'SELECT * FROM registered_customer WHERE email = ?';
  const [user] = await db.execute(sql, [email]);

  if (!user[0]) throw new Error('User not found');
  
  const passwordMatch = await bcrypt.compare(password, user[0].password_hash);
  if (!passwordMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user[0].id, email: user[0].email }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};
