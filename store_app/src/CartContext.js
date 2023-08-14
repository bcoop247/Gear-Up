import React, { createContext, useContext, useReducer } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';

//CART REDUCER
const cartReducer = (state, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return {...state, cartItems: [...state.cartItems, action.payload],};
      default: return state;
  }
};

// CONTEXT OF THE CART
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {cartItems: []});

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <CartContext.Provider value={{ cart: cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );

}

export const useCart = () => {
  return useContext(CartContext);
}




