import { useState } from "react";
import { Link } from 'react-router-dom'; // POPULAR LIBRARY FOR HANDLING ROUTING/NAVIGATION IN REACT
import NewUserForm from "./NewUserForm.js";

const UserLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const apiBaseURL = "http://localhost:3500";

  // const handleClick = (event) => { return ( <NewUserForm /> ) };
  const handleEmailChange = (event) => { setEmail(event.target.value) };
  const handlePasswordChange = (event) => { setPassword(event.target.value) };
  const handleSubmit = async (event) => { event.preventDefault();
    
  try{
    // SEND THE USRS LOGIN CREDENTIALS THROUGH THE SERVER TO THE DB AS JSON
    const response = await fetch(`${apiBaseURL}/retail_store/login`, { 
    method: 'POST', 
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }), 
  });

    console.log('Login Form Submitted');
  
    // ONCE THE PROMISE HAS RESOLVED, ASSIGN THE RESPONSE TO A VARIABLE
    const data = await response.json();
    console.log(data);
    

  }
  catch (error){
    console.log('Error During Login', error);

  }
  };

  return (
    <div>
      <div><h1>Login</h1></div>
    
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={ handleEmailChange } required />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" onChange={ handlePasswordChange } required />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>

    </form>

    <div>
      <h3>New User?</h3>
      <Link to="/NewUserForm">Create Account</Link>
    </div>
    
    </div>
    
  );
};


export default UserLoginForm;