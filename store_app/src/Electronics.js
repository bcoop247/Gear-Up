import Header from "./Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import { useShoppingCart } from "./ShoppingCartContext";
import Navbar from "./Navbar";

const Electronics = () => {
  const [electronicProducts, setElectronicProducts] = useState([]);
  const baseURL = "http://localhost:3500";
  const { addToCart } = useShoppingCart();

  const handleSearch = (searchInput) => {
    console.log('User searched for:', searchInput);
  };
  
    useEffect(() => {
      fetch(`${baseURL}/electronicproducts`)
      .then(response => response.json())
      .then(data => { setElectronicProducts(data);
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

      <Navbar />


<div className="container d-flex justify-content-center">
  <h2 id="pageHeaders">Electronics</h2>
</div>
<br /> <br />
<Link to="/cart"> <CartIcon /> </Link>

<ul>
        {electronicProducts.map((product) => (
        <li key={product.id} className="list-group-item d-flex align-items-center">
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
}

export default Electronics;