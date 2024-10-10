const db = require('../models/db');

// Get all products
exports.getProducts = (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Get a product by ID
exports.getProductById = (req, res) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Create a new product
exports.createProduct = (req, res) => {
    const { name, category_id, price, description } = req.body;
    const sql = 'INSERT INTO products (name, category_id, price, description) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, category_id, price, description], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name, category_id, price, description });
    });
};

// Update a product
exports.updateProduct = (req, res) => {
    const { name, category_id, price, description } = req.body;
    const sql = 'UPDATE products SET name = ?, category_id = ?, price = ?, description = ? WHERE id = ?';
    db.query(sql, [name, category_id, price, description, req.params.id], (err) => {
        if (err) throw err;
        res.json({ msg: 'Product updated' });
    });
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({ msg: 'Product deleted' });
    });
};
