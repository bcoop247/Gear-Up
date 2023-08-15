import Header from "./Header";
import './App.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useShoppingCart } from "./ShoppingCartContext";

const MensPage = () => {
  const [mensProducts, setMensProducts] = useState([]);
  const baseURL = "http://localhost:3500";
  const { addToCart } = useShoppingCart();

const handleSearch = (searchInput) => {
  console.log('User searched for:', searchInput);
};

  useEffect(() => {
    fetch(`${baseURL}/mensproducts`)
    .then(response => response.json())
    .then(data => { 
      setMensProducts(data);
    // .catch(error => console.log('Error fetching products', error));
      
    })
  }, []);

  const handleAddtoCart = (product) => {
    addToCart(product);
    console.log();
  };

  return(
    <div>
 <Header onSearch={handleSearch}/>
  <div className="container d-flex justify-content-center">
  <h2 className="customH2">Mens Apparel</h2>
  </div>
 <Link to="/cart"> <CartIcon /> </Link>

<div className="container">

<ul>
        {mensProducts.map((product) => (
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

</div>

  
</div>
  )
};

export default MensPage;