import Header from "./Header";
import './App.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useShoppingCart } from "./ShoppingCartContext";
import Navbar from "./Navbar";

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
    .then(data => setMensProducts(data))
}, []);

const handleAddtoCart = (product) => {
  addToCart(product);
};

return(
  <div className='container justify-content-center'>
    <Header onSearch={handleSearch}/>

   <Navbar />


      <div className="container d-flex justify-content-center">
        <h2 id="pageHeaders">Mens Apparel</h2>
      </div>
      <br /><br />
    <Link to="/cart"> <CartIcon /> </Link>

<ul>
  {mensProducts.map((product) => (
    <li key={product.sku} className="list-group-item d-flex align-items-center">
    {product.imageType === 'url' ? (
    <img src={product.image} alt={product.product_name} className="img-fluid rounded float-start customImage" />
    ) : (
    <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.product_name} className="img-fluid rounded float-start customImage" />
    )}
         
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
      
</div>
)
};

export default MensPage;