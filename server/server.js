const express = require('express');
const pgp = require('pg-promise')();
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const port = 3500;
const db = require('./db');

//parses JSON data from incoming HTTP requests and makes it accessible in the req.body object
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.json());

// ENABLE CORS TO ALLOW FRONT END ACCESS TO THE DATABASE
app.use(cors());

//ASSIGN ROUTES
const mensProductsRoute = require('./routes/mensProducts');
const womensProductsRoute = require('./routes/womensProducts')
const electronicsProductsRoute = require('./routes/electronicProducts');
const jewelryProductsRoute = require('./routes/jewelryProducts');
const searchRoute = require('./routes/search');

//SETUP ROUTE MIDDLEWARE
app.use('/mensproducts', mensProductsRoute);
app.use('/womensproducts', womensProductsRoute);
app.use('/electronicproducts', electronicsProductsRoute);
app.use('/jewelryproducts', jewelryProductsRoute);
app.use('/search', searchRoute);


//BASIC ROUTE FOR THE HOMEPAGE
app.get('/', (req, res) => {
  res.send('Hello, expressss!');
});

//LOGIN ROUTE TO AUTHENTICATE USER CREDENTIALS
app.post('/retail_store/login', async (req, res,) => {
  const { email, password } = req.body;

  try{
    const user = await db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [email, password]);

    if(!user) { res.status(404).json({ message: "Invalid Email or Password" }) }
    
    //TO DO: VALIDATE THE USERS PASSWORD
    else if (user) { res.json(user) };
    
  }
  catch(error){
    console.log('Error Connecting to DB');
  }
});

app.post('/retail_store/new_user', async (req, res) => {
  const {firstName, lastName, username, email, password } = req.body;
  const saltRounds  = 10; // NUMBER OF ITERATIONS TO HASH PASSWORD
  
  bcrypt.hash(password, saltRounds, async (error, hashedPassword) => { 
  await db.query(`INSERT INTO users (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5)`, [firstName, lastName, username, email, hashedPassword])

  .then(() => {
    console.log("User successfully inserted.");
    res.status(201).send("User created successfully."); // Send a success response
  })
  .catch((error) => {
    console.error("Error inserting user:", error);
    res.status(500).send("An error occurred while creating the user."); // Send an error response
  });

});
});


//START THE SERVER
app.listen(port, () => {console.log(`The server is running on port http://localhost${port}`)});