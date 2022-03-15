import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {CartProvider} from './context/cart'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


