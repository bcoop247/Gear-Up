import './App.css'
import Header from './Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import ClearLocalStorageButton from './ClearLocalStorageButton'; 

const HomePage = () => {
  const [userData, setUserData] = useState({});

  const handleSearch = (searchInput) => {
    console.log('User searched for:', searchInput);

    // Perform any search-related logic here
    // For example, you can filter a list of items based on the search input

  };

useEffect(() => {
  const storedUserInfo = JSON.parse(localStorage.getItem('userData'));
  if(storedUserInfo){
    setUserData(storedUserInfo);
  }
  else{
    setUserData(null);
  }
}, []);
 
  return(
    <div className='container justify-content-center'>
      
      {userData ?  <ClearLocalStorageButton userData={userData}>Logout</ClearLocalStorageButton> : 
      <Link to="/login">
          <button type="button"className="btn position-absolute top-0 start-0 mt-3 ms-3" id="loginButton"> Login </button>
      </Link>}
      

<Header onSearch={handleSearch} />

<Link to="/cart"> <CartIcon userData={userData} /> </Link>

<div className="container d-flex justify-content-center">
  {userData ? <h1 id="userName"> Welcome, {userData.first_name} {userData.last_name}</h1> : <h1 id="userName">Welcome, Guest </h1>}
</div>

<br /> <br />

<div className="container d-flex justify-content-center">
  {/* <h5 id="customH5">"Your presence is worthy"</h5> */}
  <h2 id="quoteH2">Your presence is worthy</h2>
</div>

<h6>Enter Customer Reviews Here</h6>

   
    </div>
  )
};

export default HomePage;