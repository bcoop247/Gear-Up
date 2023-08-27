const express = require('express');
const db = require("../db")
const router = express.Router();

//ROUTER FOR "/mensproducts"
router.get('/', async (req, res) => {

  try {
    const products = await db.query(`SELECT * FROM products WHERE category = 'men''s clothing'`);

    if(!products) { 
      res.status(404).json({ message: "Invalid Email or Password" }) 
    }

    else if(products) {
      res.json(products)
    };

  }
  catch (error) {
    console.log('Error Connecting to the Database');
  }

});

module.exports = router;