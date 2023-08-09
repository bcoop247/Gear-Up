const express = require('express');
const pgp = require('pg-promise')();
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const port = 3500;
const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'retail_store',
  user: 'brandoncooper',
  password: 'pass'
};
const db = pgp(dbConfig);

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// ENABLE CORS TO ALLOW FRONT END ACCESS TO THE DATABASE
app.use(cors());

//BASIC ROUTE FOR THE HOMEPAGE
app.get('/', (req, res) => {
  res.send('Hello, expressss!');
});

//LOGIN ROUTE TO AUTHENTICATE USER CREDENTIALS
app.post('/retail_store/login', async (req, res,) => {
  const { email, password } = req.body;

  try{
    const user = await db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [email, password]);

    if(!user)
      { res.status(404).json({ message: "Invalid Email or Password" }) }
     
      //TO DO: VALIDATE THE USERS PASSWORD
    else if (user) { res.json(user) };
    
  }
  catch(error){
    console.log('Error Connecting to DB');
  }
});

//START THE SERVER
app.listen(port, () => {console.log(`The server is running on port http://localhost${port}`)});