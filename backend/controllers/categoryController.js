const db = require('../config/db');

// Get all categories
exports.getCategories = (req, res) => {
    const sql = 'SELECT * FROM categories';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Get category by ID
exports.getCategoryById = (req, res) => {
    const sql = 'SELECT * FROM categories WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Create a new category
exports.createCategory = (req, res) => {
    const { name } = req.body;
    const sql = 'INSERT INTO categories (name) VALUES (?)';
    db.query(sql, [name], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name });
    });
};

// Update a category
exports.updateCategory = (req, res) => {
    const { name } = req.body;
    const sql = 'UPDATE categories SET name = ? WHERE id = ?';
    db.query(sql, [name, req.params.id], (err) => {
        if (err) throw err;
        res.json({ msg: 'Category updated' });
    });
};

// Delete a category
exports.deleteCategory = (req, res) => {
    const sql = 'DELETE FROM categories WHERE id = ?';
    db.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({ msg: 'Category deleted' });
    });
};
