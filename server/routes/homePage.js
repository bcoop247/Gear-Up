const express = require('express');
const db = require('../db');
const router = express.Router();


router.get('/', async (req, res) => {
  
  try {
    const quotes = await db.query(`SELECT * FROM positive_quotes`);

    if(!quotes)
      { res.status(404).json({ message: "No Quotes Found" }) }
    else if(quotes){
      res.json(quotes);
    };
  }
  catch (error) {
    console.log('Error Connecting to the Database');
  }
});


module.exports = router;