import Header from "./Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import CartIcon from "./CartIcon";
import { useShoppingCart } from "./ShoppingCartContext";

const WomensPage = () => {
  const [womensProducts, setWomensProducts] = useState([]);
  const baseURL = "http://localhost:3500";
  const { addToCart } = useShoppingCart();

  const handleSearch = (searchInput) => {
    console.log('User searched for:', searchInput);
  };
  
    useEffect(() => {
      fetch(`${baseURL}/womensproducts`)
      .then(response => response.json())
      .then(data => { setWomensProducts(data);
      // .catch(error => console.log('Error fetching products', error));
      })
    }, []);

    const handleAddtoCart = (product) => {
    addToCart(product);
    console.log();
  };
  
  return (
    
      <div className='container justify-content-center'>
      <Header onSearch={handleSearch}/>

<div className="container d-flex justify-content-center">
  <h2 className="customH2">Womens Apparel</h2>
</div>

<Link to="/cart"> <CartIcon /> </Link>



<ul>
        {womensProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
            <p>{product.product_name}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <button className="btn btn-primary" onClick={() => handleAddtoCart(product)}>Add to Cart</button>
            <br />
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>


    

   </div>
  )
}

export default WomensPage;