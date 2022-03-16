import React from 'react'
import './cart.scss';

import { useCart,useDispatchCart } from '../context/cart';


const Cart = () => {
    const cartItems = useCart()
    const dispatch= useDispatchCart();


const handleRemove=(item,index)=>{
   dispatch({type:"REMOVE", payload:{item,index}})
}

const getCartTotal=(cartList)=>{
  return cartList.reduce((a,b)=>a+b.price*b.qty,0);
}


const total = getCartTotal(cartItems)

  return (
    <div className='shopping-cart'>
        {
            cartItems.length>0 && cartItems.map((item,index)=>(
                <div key={item.id}>
                    <p>{item.name}</p> <br/> 
                    <p>{item.qty}</p>
                    <img src={item.imageUrl} alt='imagem do produto'  width='110'/>
                    {/* <span>{item.listPrice /100}</span> <br /> <span>{item.sellingPrice/100}</span> */}
                    <button onClick={()=>handleRemove(item,index)}>remove</button>
                </div>
            ))
        }

      <div>
        {
          total>0 ? <p>{total/100}</p>: <p>Cart is empty</p>
        }
          <h2>{total/100 > 10? 'FRETE GRÁTIS': ''}</h2>
          
      </div>
    </div>
  )
}

export default Cart