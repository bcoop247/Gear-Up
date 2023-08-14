const express = require('express');
const db = require("../db")
const router = express.Router();

// API ENDPOINT /search
router.get('/', (req, res) => {
  res.json("TESTING");
});

router.post('/', async (req, res) => {
  const {query} = req.body;
  const results = await db.query(`SELECT * FROM products`);
  if(!results){
    res.status(404).json({message: 'Error Searching Database'});
  }
  else if(results){ res.json(results)
    // const filteredResults = results((result) => {
    //   result.product_name.toLowerCase().includes(query.toLowerCase())
    // });
    res.status(404).json({message: 'there are results'});
  };
  
})

module.exports = router;