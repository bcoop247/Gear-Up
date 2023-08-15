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
    <div className='container'>
      <Header />
      <div className='container'>
      <h2>Your Cart</h2>
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
            </li>
           
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      </div>
    </div>
  );
}

export default CartPage;








