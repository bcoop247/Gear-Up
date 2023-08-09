import React from "react";

const NewUserForm = () => {


  return (
    
    <div>
      <div><h1> Create New Account </h1></div>
      <form>
        <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="email">E-mail:</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input type="text" />
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewUserForm;