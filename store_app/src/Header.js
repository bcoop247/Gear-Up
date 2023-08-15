import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// onSearch 
const Header = ({onSearch}) => {
  
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  
  const handleInputChange = (event) => {
   const inputValue = event.target.value;
   setSearchValue(inputValue);
   onSearch(inputValue); // CALL THE CALLBACK FUNCTION WITH THE USERS INPUT
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue); // CALL CALLBACK FUNCTION WITH SEARCH VALUE
    navigate(`/search?query=${searchValue}`);
  };

  return (
    <div>
      {/* <h1>{searchValue}</h1> */}
      <div className="d-grid justify-content-center align-items-center">
      <Link to="/homepage"> <button type="button" className="btn"> <h1 className="storeH1">GEARup.com</h1></button></Link>
      </div>


<nav className="nav nav-pills nav-fill" id="customNavBar">
  <Link to="/menspage" className="nav-link"  aria-current="page" >Mens</Link>
  <Link to="/womenspage" className="nav-link ">Womens</Link>
  <Link to="/electronics" className="nav-link">Electronics</Link>
  <Link to="/jewelry" className="nav-link" >Jewelry</Link>

  <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange} />
      <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
  </form>
</nav>

<br></br>
<br></br>
    </div>
  )
}

export default Header;