import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from './ShoppingCartContext';
import Header from './Header';

function CartPage() {
  const { cart, removeFromCart, total } = useShoppingCart();
  // const cartTotal = Number(total);
  
  const handleSearch = (searchInput) => {
  console.log('User searched for:', searchInput);
};

  return (
    <>
    <div className='container justify-content-center'>
      <Header onSearch={handleSearch} />
      
      <div className="container d-flex justify-content-center">
          <h2 id="pageHeaders">Shopping Cart</h2>
      </div>
      <br /><br />
      
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
          <li key={product.sku} className="list-group-item d-flex align-items-center">
          <img src={product.image} alt={product.product_name} className="img-fluid rounded float-start customImage" />
          <div className="ms-3">
            <p>Gear: {product.product_name}</p>
            <p>Detail: {product.description}</p>
            <p>Rating: {product.rating} / 5</p>
            <p>Price: {product.price}</p>
            <button className="btn" id="removeFromCartButton" onClick={() => removeFromCart(product.sku)}>Remove</button>
            <br /> <br /> <br />
          </div>
          </li>
          ))}
        </ul>
      ) : (
        <p className="container d-flex justify-content-center" style={{ color: '#8B0000' }}>Your cart is empty.</p>
      )}


<div className="d-grid justify-content-center">
  <p>Total: ${total}</p>
  <Link to='/checkout'>
    <button type="submit" className="btn" id="homeButton">Checkout</button>
  </Link>
</div>
      
</div>

</>
  );
}

export default CartPage;








