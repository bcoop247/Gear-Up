import React, { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const apiBaseURL = "http://localhost:3500";

const NewUserForm = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    // DESTRUCTURING THE NAME ATTRIBUTE FROM THE INPUT TAG AND THE VALUE IS THE USER INPUT
    const {name, value} = event.target;
    //DYNAMICALLY SET THE FORM DATA BY USING BRACKETS AROUND THE PROPERTY NAME IN OBJECT LITERAL
    setFormData({...formData, [name]: value});
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch(`${apiBaseURL}/retail_store/new_user`, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData),  });

      if(response.ok){
        console.log('Form was Submitted Successfully');
        console.log(formData);
        localStorage.setItem('userData', JSON.stringify(formData));
        navigate(`/homepage`);
        

        } else {
        console.log("Error submitting Form");  }

  } catch(error){
      console.log("Error Submtting Form", error);
    }
  };

  return (
    
    <div className="container">
      <Logo />
       <br /> <br />
        <Link to="/login">
          <button type="button"className="btn position-absolute top-0 start-0 mt-3 ms-3" id="homeButton"> Back
          </button>
        </Link>

          <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
            <h2 id="pageHeaders">Create New User</h2>
              <div className="col-sm-6 justify-content-center align-items-center">
                <label htmlFor="firsName" className="form-label" ></label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="First Name"
                  required
                />
              </div>

    <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label"></label>
          <input
            type="text"
            id="lastName"
            name="last_name"
            onChange={handleInputChange}
            className="form-control"
            placeholder="Last Name"
            required
          />
    </div>

    <div className="col-sm-6">
          <label htmlFor="username" className="form-label"></label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
            className="form-control"
            placeholder="User Name"
            required
          />
    </div>

    <div className="col-sm-6">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            className="form-control"
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
            onChange={handleInputChange}
            className="form-control"
            placeholder="Password"
            required
          />
    </div>

    <br />
    <br />
    
    <div className="mb-3">
         
          <button type="submit" className="btn" id="homeButton">Create User</button> 
         
    </div>

  </form>
  
    </div>
  )
}

export default NewUserForm;