import React, { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react';

// CART ACTIONS
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

//CART REDUCER FUNCTION
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const indexToRemove = state.findIndex((product) => product.id === action.payload);
      if(indexToRemove !== -1){
        return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
      }
      return state;

    default:
      return state;
  }
}

//SHOPPING CART CONTEXT
const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, getCartFromLocaleStorage());

  //USE LOCALE STORAGE TO PERSIST DATA UPON PAGE REFRESH
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
// UTILITY FUNCTION TO RETRIEVE CART FROM LOCALSTORAGE
function getCartFromLocaleStorage() {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
}

//CUSTOM HOOK TO USE THE SHOPPING CART CONTEXT
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}



