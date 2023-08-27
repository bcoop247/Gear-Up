const express = require('express');
const db = require("../db")
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('User Profile Route');
// });

router.get('/', async (req, res) => {
  // res.send('WORKING');

  try {
    const users = await db.query(`SELECT * FROM users`);

    if(!users) { res.status(404).json({ message: "No users found" }) }

    else if(users) {res.json(users)};
  }
  catch (error) {
    console.log('Error Connecting to the Database');
  }

});


module.exports = router;