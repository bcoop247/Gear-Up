import Header from "./Header";
import { useState, useEffect } from "react";
import './App.css';
import CartIcon from "./CartIcon";
import AddToCartButton from "./AddToCartButton";

const WomensPage = () => {
  const [womensProducts, setWomensProducts] = useState([]);
  const baseURL = "http://localhost:3500";
  
    useEffect(() => {
      fetch(`${baseURL}/womensproducts`)
      .then(response => response.json())
      .then(data => { setWomensProducts(data);
      // .catch(error => console.log('Error fetching products', error));
      })
    }, []);
  
  return (
    <div>
      <Header />

<div className="container d-flex justify-content-center">
  <h2 className="customH2">Womens Apparel</h2>
</div>

<CartIcon />

<div className="container">

<ul>
        {womensProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
            <p>{product.product_name}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <AddToCartButton />
            <br />
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>

</div>
    

   </div>
  )
}

export default WomensPage;