import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import Header from './Header';

function CartPage() {
  const { cart, removeFromCart } = useShoppingCart();
  console.log(cart);

  const handleRemoveFromCart = (productID) => {
    removeFromCart(productID);
    console.log(cart);
  };

  return (
    <div className='container justify-content-center'>
      <Header />
      
      <div className="container d-flex justify-content-center">
          <h2 className="customH2">Shopping Cart</h2>
      </div>
      
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.product_name} className="rounded float-start customImage" />
              <p>{product.product_name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button className="btn btn-primary" onClick={() => handleRemoveFromCart(product.sku)}>Remove</button>
            <br />
            <br />
            <br />
            <br />
            </li>
           
          ))}
        </ul>
      ) : (
        <p className="container d-flex justify-content-center" style={{ color: '#8B0000' }}>Your cart is empty.</p>
      )}
      
    </div>
  );
}

export default CartPage;








