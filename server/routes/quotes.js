const express = require('express');
const db = require('../db');
const router = express.Router();

// ROUTE FOR /quotes
router.get('/', (req, res) => {
  res.json('Testing');
  
})

module.exports = router;