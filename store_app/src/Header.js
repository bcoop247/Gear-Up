import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CartIcon from './CartIcon';
import './App.css';

// onSearch 
const Header = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  
  const handleInputChange = (event) => {
   const inputValue = event.target.value;
   setSearchValue(inputValue);
   onSearch(inputValue); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue); // CALL CALLBACK FUNCTION WITH SEARCH VALUE
    navigate(`/search?query=${searchValue}`);
  };

  useEffect(() => {
    
  }, []);

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

  return (
    
 
    <div>
      <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex align-items-center me-4">
        <Link to="/homepage">
          <button type="button" className="btn">
            <h1 className="storeH1"> G E A R u p   
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16" id="arrowLogo">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
              </svg>
            </h1>
          </button>
        </Link>
        </div>
        

        <div className="ms-6">
          <form role="search" onSubmit={handleSubmit}>
            <input className="form-control" id="searchBar" type="search" aria-label="Search" placeholder="Search" style={{width: '300px'}} onChange={handleInputChange} />
          </form>
        </div>

        
        <Link to="/cart"> 
          <CartIcon userData={userData} /> 
        </Link>
      </div>

      
{/* <nav className="nav nav-pills nav-fill">
  <Link to="/menspage"  className="nav-link" id="custom-nav-link"  aria-current="page">Mens</Link>
  <Link to="/womenspage" className="nav-link" id="custom-nav-link">Womens</Link>
  <Link to="/electronics" className="nav-link" id="custom-nav-link">Electronics</Link>
  <Link to="/jewelry" className="nav-link" id="custom-nav-link" >Jewelry</Link>
</nav> */}

<br></br>
<br></br>
</div>
  )
}

export default Header;