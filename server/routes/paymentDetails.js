const express = require('express');
const db = require("../db")
const router = express.Router();


// Endpoint /paymentdetails
router.get('/', (req, res) => {
  res.json('Payment Details');
});

router.post('/', async (req, res) => {
  const { custID, creditCardNumber, cardHolderName, selectedMonth, selectedYear, cvv } = req.body;

  await db.query(
    `INSERT INTO payment_information (customer_id, card_number, card_holder_name, expiration_month, expiration_year, cvv)
    VALUES($1, $2, $3, $4, $5, $6)`, [custID, creditCardNumber, cardHolderName, selectedMonth, selectedYear, cvv]
  ).then(() => {
    console.log("Payment Information successfulyy updated in Database");
    res.status(201).send("Payment Success!")
  }).catch((error) => {
    console.error("Error inserting Payment Info:", error);
    res.status(500).send("An error occurred while creating the payment."); // Send an error response.
  });
  });


module.exports = router;