import Header from "./Header";
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import AddToCartButton from "./AddToCartButton";

const Jewelry = () => {
  const [jewelryProducts, setJewelryProducts] = useState([]);
  const baseURL = "http://localhost:3500";
  
    useEffect(() => {
      fetch(`${baseURL}/jewelryproducts`)
      .then(response => response.json())
      .then(data => { setJewelryProducts(data);
      // .catch(error => console.log('Error fetching products', error));
        
      })
    }, []);

  return (
  <div>
    <Header />
    <div className="container d-flex justify-content-center">
      <h2 className="customH2">Jewelry</h2>
    </div>
    <CartIcon />

    <div className="container">

<ul>
        {jewelryProducts.map((product) => (
          <li key={product.id}>
            {/* Render individual product properties */}
            <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
            <p>{product.product_name}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <AddToCartButton />
            <br />
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
}

export default Jewelry;