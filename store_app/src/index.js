import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ShoppingCartProvider } from './ShoppingCartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* WRAP ENTIER APP SO IT HAS THE SHOPPING CART AVAILABLE */}
    <ShoppingCartProvider>
    <App />
    </ShoppingCartProvider>
  </React.StrictMode>
);


