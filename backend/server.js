const mysql = require('mysql');

// Connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: 'Themiya1998', // replace with your MySQL password
  database: 'cart', // replace with your database name
};

// Create a connection variable
let db;

function handleDisconnect() {
  db = mysql.createConnection(dbConfig); // Create a new connection

  db.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      setTimeout(handleDisconnect, 2000); // Try to reconnect after 2 seconds
    } else {
      console.log('Connected to MySQL');
    }
  });

  db.on('error', function(err) {
    console.error('MySQL error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.fatal) {
      // If the connection is lost or there's a fatal error, reconnect
      handleDisconnect();
    } else {
      throw err; // Handle other types of errors
    }
  });
}

// Call the function to establish the connection
handleDisconnect();

module.exports = db;
