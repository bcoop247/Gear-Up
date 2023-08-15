import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import Header from "./Header";
const baseURL = "http://localhost:3500";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const [products, setProducts] = useState([]);
  // const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (searchInput) => {
    console.log('User searched for:', searchInput);

    // Perform any search-related logic here
    // For example, you can filter a list of items based on the search input

  };

  useEffect(() => {
    fetch(`${baseURL}/search?query=${query}`)
    .then(response => response.json())
    .then(data => {
      setProducts(data);
      console.log('Fetch Complete');
    });
    
  }, []);
  console.log(products);
  const lowerCaseSearchTerm = query.toLowerCase();
  const filteredProducts = products.filter(product => {
    if(product){
    return product.product_name.toLowerCase().includes(lowerCaseSearchTerm);
    }else{
      return ["The Search Did not Yield any Results"];
    }
  });
  
  return (
    <>
    <Header onSearch={handleSearch}/>
     {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
              <p>{product.product_name}</p> 
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <AddToCartButton />
            <br />
            <br />
            <br />

              
              </li>
          ))}
        </ul>
      ) : (
        <p className="errorMessage">No matching products found.</p>
      )}
    
  

    {/* <ul>
      
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
            <p>{product.product_name}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
        
            <AddToCartButton />
            <br />
            <br />
            <br />
          </li>
        ))}
    </ul> */}
   
   
    
    </>
  )
}

export default SearchPage;