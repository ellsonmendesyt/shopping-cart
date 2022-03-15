import React,{useState,useEffect} from 'react'

import './GlobalStyle/app.scss'
import axios from 'axios';
import Item from './components/Item';
import List from './components/List';

function App() {

  const [products,setProducts]=useState([])

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
    <div className="app">
     
    <List items={products} />
       
    
    </div>
  );
}

export default App;
