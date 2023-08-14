import React, { useState } from "react"
import { Link } from "react-router-dom";

const apiBaseURL = "http://localhost:3500";

const NewUserForm = () => {
  const [formData, setFormData] = useState({});

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
      body: JSON.stringify(formData),
    });

    if(response.ok){
      console.log('Form was Submitted Successfully');
    } else {
      console.log("Error submitting Form");
    }
  }
    catch(error){
      console.log("Error Submtting Form");
    }
  }

  return (
    
    <div> 
      <div className="d-grid justify-content-center align-items-center">
      <Link to="/homepage"> <button type="button" className="btn"> <h1 className="storeH1">GEARup.com</h1></button></Link>
      </div>

    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
    <h2 className="customH2">Create New User</h2>
    <div className="col-sm-6 justify-content-center align-items-center">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleInputChange}
            className="form-control"
            required
          />
    </div>

    <br />

    <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleInputChange}
            className="form-control"
            required
          />
    </div>

    <br />

    <div className="col-sm-6">
          <label htmlFor="username" className="form-label">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
            className="form-control"
            required
          />
    </div>

    <br />

    <div className="col-sm-6">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            className="form-control"
            required
          />
    </div>
        
    <br />

    <div className="col-sm-6">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            className="form-control"
            required
          />
    </div>

    <br />
    <br />
    
    <div className="mb-3">
         <Link to="/homepage"> <button type="submit" className="btn btn-primary">Create User</button> </Link>
    </div>

  </form>
    </div>
  )
}

export default NewUserForm;