import './App.css'
import Header from './Header';

const HomePage = () => {

  const handleSearch = (searchInput) => {
    console.log('User searched for:', searchInput);

    // Perform any search-related logic here
    // For example, you can filter a list of items based on the search input

  };
 
  return(
    <div>
      
<Header onSearch={handleSearch} />

<div className="container d-flex justify-content-center">
  <h1 id="welcomeH1">WELCOME</h1>
</div>
<div className="container d-flex justify-content-center">
  <h3>Enter User Name Here</h3>
</div>
<br></br>
<div className="container d-flex justify-content-center">
  <h5 id="customH5">Here at GEARup, we aim to provide you with the freschest, coolest apparel on the market. Our duty is to provide you with exceptional apparal at the  lowest cost possible. Our customer service team is readily aviable to help 24/7! If you are not fully satisfied with your experience or our product please contact us so we can make it right!</h5>
</div>

<h6>Enter Customer Reviews Here</h6>

   
    </div>
  )
};

export default HomePage;