const adminService = require('../services/adminService');

exports.login = async (req, res) => {
    const {username, password} = req.body;

};

exports.quarterlySalesReport = async (req, res) => {
    const {year} = req.body;
};

exports.topSellingProducts = async (req, res) => {
    const {startDate, endDate} = req.body;
};

exports.salesByCategory = async (req, res) => {
    
};