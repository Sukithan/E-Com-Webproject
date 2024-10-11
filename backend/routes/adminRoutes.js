const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//Routes for admin
router.post('/login', adminController.login);
router.post('/quarterlySalesReport', adminController.quarterlySalesReport);
router.post('/topSellingProducts', adminController.topSellingProducts);
router.get('/salesByCategory', adminController.salesByCategory);