//adminSevices 
const db = require('../database/connection'); // Assumed connection to DB

exports.getCustomerOrderReport = async () => {
    // Query to fetch customer order details
    const query = `SELECT * FROM orders ORDER BY order_date DESC;`;
    const [results] = await db.execute(query);
    return results;
};


