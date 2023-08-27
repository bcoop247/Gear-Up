import './App.css'
import Header from './Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import CartIcon from './CartIcon';
import ClearLocalStorageButton from './ClearLocalStorageButton';
import mensImage from './images/mensImage.jpg';
import womensImage from './images/womensImage.png';
import jeweleryImage from './images/jeweleryImage.jpg';
import electronicsImage from './images/electronics.jpg';


const HomePage = () => {
  // const baseURL = "http://localhost:3500";
  const [userData, setUserData] = useState({});
  // const [randomQuote, setRandomQuote] = useState([]);

  const handleSearch = (searchInput) => {
    console.log('User searched for:', searchInput);
    // Perform any search-related logic here
    // For example, you can filter a list of items based on the search input
  };

useEffect(() => {
  const storedUserInfo = JSON.parse(localStorage.getItem('userData'));
  const newUserData = JSON.parse(localStorage.getItem('newUserData'));
  
  if(storedUserInfo){
    setUserData(storedUserInfo);
  }
  else if (newUserData){
    setUserData(newUserData);
  }else{
    setUserData(null);
  }
}, []);

// useEffect(() => {
//   fetch(`${baseURL}/homepage`)
//   .then(response => response.json())
//   .then(data => { 
//   const randomIndex = Math.floor(Math.random() * data.length);
//   setRandomQuote(data[randomIndex]);
//   })
// }, []);

  return(
    <div className='container justify-content-center'>
      
      {userData ?  <ClearLocalStorageButton userData={userData}>Logout</ClearLocalStorageButton> : 
      <Link to="/login">
          <button type="button"className="btn position-absolute top-0 start-0 mt-3 ms-3" id="homeButton"> Login </button>
      </Link>}
      
<Header onSearch={handleSearch} />
<br /> <br />

{/* <div className="container d-flex justify-content-center">
  <h2 id="quoteH2">{ randomQuote.quote }</h2>
</div> */}

<div class="container">
  <div class="row">
    <div class="col-sm-3">
      <div class="panel panel-primary">
        <div class="panel-heading" style={{color: 'white', textAlign: 'center'}}>MENS APPAREL</div>
        <Link to="/menspage">
        <div class="panel-body"><img src={mensImage} class="img-responsive" style={{width:'100%', height:'350px', borderRadius: '15px', overflow: 'hidden'}} alt="mens_apparel" /></div>
        </Link>
        
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel panel-danger">
        <div class="panel-heading" style={{color: 'white', textAlign: 'center'}}>WOMEN'S APPAREL</div>
        <Link to="/womenspage">
          <div class="panel-body"><img src={womensImage} class="img-responsive" style={{width:'100%', height:'350px', borderRadius: '15px', overflow: 'hidden'}} alt="womens_apparel" /></div>
        </Link>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel panel-success">
        <div class="panel-heading" style={{color: 'white', textAlign: 'center'}}>ELECTRONICS</div>
        <Link to="/electronics">
          <div class="panel-body"><img src={electronicsImage} class="img-responsive" style={{width:'100%', height:'350px', borderRadius: '15px', overflow: 'hidden'}} alt="electronics" /></div>
        </Link>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="panel panel-primary">
        <div class="panel-heading" style={{color: 'white', textAlign: 'center'}}>JEWELERY</div>
        <Link to="/jewelry">
          <div class="panel-body"><img src={jeweleryImage} class="img-responsive" style={{width:'100%', height:'350px', borderRadius: '15px', overflow: 'hidden'}} alt="jewelery" /></div>
        </Link>
      </div>
    </div>
  </div>
</div>

</div>
)
};

export default HomePage;