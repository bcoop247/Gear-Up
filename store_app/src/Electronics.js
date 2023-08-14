import Header from "./Header";
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import AddToCartButton from "./AddToCartButton";

const Electronics = () => {
  const [electronicProducts, setElectronicProducts] = useState([]);
  const baseURL = "http://localhost:3500";
  
    useEffect(() => {
      fetch(`${baseURL}/electronicproducts`)
      .then(response => response.json())
      .then(data => { setElectronicProducts(data);
      // .catch(error => console.log('Error fetching products', error));
        
      })
    }, []);

  return (
    <div>
      <Header />


<div className="container d-flex justify-content-center">
  <h2 className="customH2">Electronics</h2>
</div>
<CartIcon />

<div className="container">

<ul>
        {electronicProducts.map((product) => (
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

export default Electronics;