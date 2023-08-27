import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ShoppingCartProvider } from './ShoppingCartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrapping app so it has the shopping cart context available throughout all modules. */}
    <ShoppingCartProvider>
    <App />
    </ShoppingCartProvider> 
  </React.StrictMode>
);


