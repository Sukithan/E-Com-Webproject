//admin Controllers
const adminService = require('../services/adminService');

// Customer Order Report
exports.customerOrderReport = async (req, res) => {
    try {
        const report = await adminService.getCustomerOrderReport();
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving customer order report' });
    }
};

