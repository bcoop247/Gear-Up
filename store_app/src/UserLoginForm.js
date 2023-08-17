import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // POPULAR LIBRARY FOR HANDLING ROUTING/NAVIGATION IN REACT
// import jwt_decode from 'jsonwebtoken';

const UserLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const apiBaseURL = "http://localhost:3500";

  const handleEmailChange = (event) => { setEmail(event.target.value) };
  const handlePasswordChange = (event) => { setPassword(event.target.value) };
  
  const handleSubmit = async (event) => { 
    event.preventDefault();
  try{
    // SEND THE USRS LOGIN CREDENTIALS THROUGH THE SERVER TO THE DB AS JSON
    const response = await fetch(`${apiBaseURL}/login`, { 
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }), 
  });

    if(response.ok){
      const data = await response.json();
      localStorage.setItem('userData', JSON.stringify(data));
      console.log(data);
      navigate('/homepage');
    } else{
      setErrorMessage('Invalid username or password');
      console.log('ERROR');
    }
    
  }
  catch (error){
    console.log('Error During Login', error);

  }
  };

  return (
    <div>
      <div className="d-grid justify-content-center align-items-center">
        <Link to="/homepage"> <button type="button" className="btn"> <h1 className="storeH1">GEARup.com</h1></button></Link>
      
        <Link to="/homepage">
          <button type="button"className="btn btn-primary position-absolute top-0 start-0 mt-3 ms-3"> Home </button>
        </Link>

        <Link to="/newuser">
        <button type="button" className="btn btn-primary position-absolute top-0 end-0 mt-3 me-3"> New Account </button>
        </Link>
      
      </div>
      
    
    <form onSubmit={ handleSubmit } className="d-flex flex-column align-items-center">
    <h2 className="customH2">Login</h2>

      <div className="col-sm-6">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
            className="form-control"
            required
          />
    </div>

      <div className="col-sm-6">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            className="form-control"
            required
          />
    </div>

    <br /><br />

    <div className="mb-3">
       
        <button type="submit" className="btn btn-primary">Login</button> 
      
    </div>
    {/* CONDITIONALLY RENDER THE ERROR MESSAGE IF NOT NULL */}
    {errorMessage && <p className="error-message" id="errorMessage"> {errorMessage} </p>}

  </form>

</div>
    
  );
};


export default UserLoginForm;