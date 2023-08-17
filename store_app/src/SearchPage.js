import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import Header from "./Header";
import { useShoppingCart } from "./ShoppingCartContext";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
const baseURL = "http://localhost:3500";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const [products, setProducts] = useState([]);
  // const [filteredResults, setFilteredResults] = useState([]);
  const { addToCart } = useShoppingCart();

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

  const handleAddtoCart = (product) => {
    addToCart(product);
    console.log();
  };
  
  return (
    <div className='container justify-content-center'>
    <Header onSearch={handleSearch}/>

    <div className="container d-flex justify-content-center">
          <h2 className="customH2">Search Results</h2>
        </div>
        
      <Link to="/cart"> <CartIcon /> </Link>

     {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
              <p>{product.product_name}</p> 
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <button className="btn btn-primary" onClick={() => handleAddtoCart(product)}>Add to Cart</button>
            <br />
            <br />
            <br />

              
              </li>
          ))}
        </ul>
      ) : (
        <p className="errorMessage">No matching products found.</p>
      )}
        
    </div>
  )
}

export default SearchPage;