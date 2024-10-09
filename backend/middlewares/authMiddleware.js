const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Access forbidden' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;  // Attach user data to request object
    next();  // Pass control to the next middleware or controller
  });
};

module.exports = authenticateJWT;

// The code defines a middleware function called authenticateJWT that checks whether a request contains a valid JWT (JSON Web Token), ensuring that only authenticated users can access certain routes or resources.


