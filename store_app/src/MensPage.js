import Header from "./Header";
import './App.css';
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import AddToCartButton from "./AddToCartButton";
// import { useCart } from "./CartContext";

const MensPage = ( {product} ) => {
const [mensProducts, setMensProducts] = useState([]);
const baseURL = "http://localhost:3500";

  useEffect(() => {
    fetch(`${baseURL}/mensproducts`)
    .then(response => response.json())
    .then(data => { setMensProducts(data);
    // .catch(error => console.log('Error fetching products', error));
      
    })
  }, []);

  console.log('Database Query Completed');

  return(
    <div>
 <Header />
  <div className="container d-flex justify-content-center">
  <h2 className="customH2">Mens Apparel</h2>
  </div>
<CartIcon />

<div className="container">

<ul>
        {mensProducts.map((product) => (
          <li key={product.id}>
            {/* Render individual product properties */}
            <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
            <p>{product.product_name}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            {/* <AddToCartButton /> */}
            <AddToCartButton />
            <br />
            <br />
            <br />
            {/* Render other product details */}
          </li>
        ))}
      </ul>

</div>

  
</div>
  )
};

export default MensPage;