import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
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
    
  }, [query]);

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
          <h2 id="pageHeaders">Search Results</h2>
        </div>
        
      <Link to="/cart"> <CartIcon /> </Link>

     {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
          <li key={product.id} className="list-group-item d-flex align-items-center">
          <img src={product.image} alt={product.product_name} className="img-fluid rounded float-start customImage" />
          <div className="ms-3">
            <p>Gear: {product.product_name}</p>
            <p>Detail: {product.description}</p>
            <p>Rating: {product.rating} / 5</p>
            <p>Price: {product.price}</p>
            <button className="btn" id="addToCartButton" onClick={() => handleAddtoCart(product)}>Add to Cart</button>
            <br /> <br /> <br />
          </div>
        </li>
          ))}
        </ul>
      ) : (
        <div className="container" >
          <p id="errorMessage">No matching products found.</p>
        </div>
      )}
        
    </div>
  )
}

export default SearchPage;