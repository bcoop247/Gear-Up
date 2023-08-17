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
const quotesRoute = require('./routes/quotes')

//SETUP ROUTE MIDDLEWARE
app.use('/mensproducts', mensProductsRoute);
app.use('/womensproducts', womensProductsRoute);
app.use('/electronicproducts', electronicsProductsRoute);
app.use('/jewelryproducts', jewelryProductsRoute);
app.use('/search', searchRoute);
app.use('/quotes', quotesRoute);

app.get('/', (req, res) => {
  res.send('Hello, expressss!');
});

//LOGIN ROUTE TO AUTHENTICATE USER CREDENTIALS
app.post('/login', async (req, res,) => {
  const { email, password } = req.body;
  
  const user = await db.oneOrNone(
    `SELECT email, first_name, last_name, username, password 
     FROM users 
     WHERE email = $1 `, 
    [email]);

    if(!user){
      return res.status(401).json({ error: 'Invalid Credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch){
      return res.status(401).json({ erro: 'Invalid Credentials'});
    }
    else if(user && passwordMatch){
      return res.json(user);
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