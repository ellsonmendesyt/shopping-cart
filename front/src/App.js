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
import Notfound from './components/Notfound';



function App() {

  const [products,setProducts]=useState([])
  const [cartItems, setCartItems]=useState([]);

const addToCart= (product)=>{
  const found= cartItems.find(item=> item.id ===product.id);
  if(found){
   setCartItems(
     cartItems.map((x)=> x.id ===product.id ? {...found,qty: found.qty+1}: x)
   )
  }else{
    setCartItems([...cartItems, {...product,qty:1}])
  }
}


  useEffect(()=>{
    axios.get("http://localhost:4000/items")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  },[])

 if(products.length>0){
   console.log(products)
 }

  return (
    <Router>
    <div className="app">
     <Header onAdd={addToCart} cartItems={cartItems} />
      <Routes>
    {/*  */}
    <Route path="/" element={<List onAdd={addToCart} items={products} />} />
    <Route path='/shopping-cart' element={<Notfound/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
