const express = require('express');
const router = express.Router();

// Add your product routes here
router.get('/', (req, res) => {
  res.send('Product API');
});

module.exports = router;
