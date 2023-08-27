import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // POPULAR LIBRARY FOR HANDLING ROUTING/NAVIGATION IN REACT
import Logo from "./Logo";

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
      // here we are setting the user object within the userContext to the fetched user data;
      // setUser(data);
      localStorage.setItem('userData', JSON.stringify(data));
      
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
    <div className="container">
      <div className="d-grid justify-content-center align-items-center">
        <Logo />
<br />
<br />
        <Link to="/homepage">
          <button type="button"className="btn position-absolute top-0 start-0 mt-3 ms-3" id="homeButton"> Home </button>
        </Link>

        <Link to="/newuser">
        <button type="button" className="btn position-absolute top-0 end-0 mt-3 me-3" id="homeButton"> New Account </button>
        </Link>
      
      </div>
      
    
    <form onSubmit={ handleSubmit } className="d-flex flex-column align-items-center">
    <h2 id="pageHeaders">Login</h2>

      <div className="col-sm-6">
          <label htmlFor="email" className="form-label" ></label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
            className="form-control box-shadow"
            placeholder="E-mail"
            required
          />
    </div>

      <div className="col-sm-6">
          <label htmlFor="password" className="form-label"></label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            className="form-control"
            placeholder="Password"
            required
          />
    </div>

    <br />
    <div class="checkbox">
    <label style={{color: 'white'}}><input type="checkbox" /> Remember me</label>
  </div>
    <br />

    <div className="d-flex justify-content-center mb-3">
       <button type="submit" className="btn" id="homeButton">Login</button> 
    </div>
    {/* CONDITIONALLY RENDER THE ERROR MESSAGE IF NOT NULL */}
    {errorMessage && <p className="error-message" id="errorMessage"> {errorMessage} </p>}

  </form>

</div>
    
  );
};


export default UserLoginForm;