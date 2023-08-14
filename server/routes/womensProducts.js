const express = require('express');
const db = require("../db")
const router = express.Router();

//ROUTER FOR "/womensproducts"
router.get('/', async (req, res) => {
  // res.send('WORKING');

  try {
    const products = await db.query(`SELECT * FROM products WHERE category = 'women''s clothing'`);

    if(!products) { res.status(404).json({ message: "Invalid Email or Password" }) }

    else if(products) {res.json(products)};
  }
  catch (error) {
    console.log('Error Connecting to the Database');
  }

});

module.exports = router;