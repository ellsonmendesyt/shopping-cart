import React from 'react'
import './item.scss';
import { useDispatchCart,useCart } from '../context/cart';


const Item = ({item}) => {

 const dispatch = useDispatchCart();
//  const items = useCart(); 

// show ribbon if the item is on promotion, it can come from the api or via prop
//for how is hard coded  


  

const addToCart=(item)=>{

  dispatch({type:"ADD", item});
}


  return (
    <div  className='item' >
        <div className="item-overlay">
            <button onClick={()=>addToCart(item)}>Add to Cart</button>
        </div>
        <span className="promo-ribbon"></span>

        <div className="photo">
           <img src={item.imageUrl} alt='imagem do produto'  width='110'/>
        </div>

        <div className="item-details">
            <p className='item-name'>{item.name}</p>
            
            <span className='full-price'>{(item.listPrice/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        </div>
         
    </div>
  )
}

export default Item