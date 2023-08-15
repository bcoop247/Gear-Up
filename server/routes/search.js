const express = require('express');
const db = require("../db")
const router = express.Router();

// API ENDPOINT /search
// router.get('/', (req, res) => {
//   res.json("TESTING");
// });

router.get('/', async (req, res) => {
  const { query } = req.body;
  const results = await db.query(`SELECT * FROM products`);
  if(results){
    res.json(results);
    }
  else{ 
    res.status(404).json({message: 'Error Searching Database'});
  };
  
})

module.exports = router;