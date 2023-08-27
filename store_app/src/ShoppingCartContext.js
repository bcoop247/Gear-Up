import React, { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react';

// CART ACTIONS
const REMOVE_AND_UPDATE_TOTAL = 'REMOVE_AND_UPDATE_TOTAL';
const ADD_AND_UPDATE_TOTAL = 'ADD_AND_UPDATE_TOTAL';

//cart reducer function,  frist argument for useReducer()
function cartReducer(state, action) {
  switch (action.type) {
  
    case ADD_AND_UPDATE_TOTAL:
      const updatedCartOnAdd = [...state.cart, action.payload];
      const updatedTotalOnAdd = calculateTotal(updatedCartOnAdd);
      return { cart: updatedCartOnAdd, total: updatedTotalOnAdd };

    case REMOVE_AND_UPDATE_TOTAL:
      const updatedCartafterRemove = state.cart.filter(product => product.id !== action.payload);
      const updatedTotal = calculateTotal(updatedCartafterRemove);
      return { cart: updatedCartafterRemove, total: updatedTotal };

    default:
      return state;
  }
}

//SHOPPING CART CONTEXT
const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {

  const initialState = {
    cart: getCartFromLocaleStorage(),
    total: calculateTotal(getCartFromLocaleStorage())
  };
const [state, dispatch] = useReducer(cartReducer, initialState);

// using local storage to persist data upon page refresh
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product) => {
    dispatch({ type: ADD_AND_UPDATE_TOTAL, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_AND_UPDATE_TOTAL, payload: productId });
  };

  return (
    <ShoppingCartContext.Provider value={{ cart: state.cart, total: state.total, addToCart, removeFromCart }}>
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

function calculateTotal(cart) {
  return cart.reduce((total, product) => total + Number(product.price), 0);
}



