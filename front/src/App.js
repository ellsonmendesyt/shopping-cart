import React,{useState,useEffect} from 'react'

import './GlobalStyle/app.scss'
import axios from 'axios';
import Item from './components/Item';
import List from './components/List';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import Cart from './components/Cart';

import { useCart } from './context/cart';

function App() {

  const [products,setProducts]=useState([])

  const cartItems= useCart();

const baseUrl="http://localhost:4000/items";

  useEffect(()=>{
    axios.get(baseUrl)
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  },[])



  return (
    <Router>
      <div className="app">
        <Header  cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<List  items={products} />} />
            <Route path='/shopping-cart' element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
