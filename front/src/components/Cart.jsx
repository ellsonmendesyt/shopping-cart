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
      <div className="cart-header">
        <h2 className='cart-title'>Meu carrinho</h2>
      </div>
       <div className="cart-body">
        {
            cartItems.length>0 && cartItems.map((item,index)=>(
                <div className='cart-item' key={item.id}>
                  <div className="cart-image-wrapper">
                    <img src={item.imageUrl} alt='imagem do produto'  width='110'/>

                  </div>

                   <div className="cart-details">
                    <h3 className='cart-desc'>{item.name}</h3>
                    <p>qtd: {item.qty}</p>
                    <p className='selling-price'>{(item.sellingPrice/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    <p>{(item.listPrice/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

                   </div>

                    <button className='remove-btn' onClick={()=>handleRemove(item,index)}>remove</button>
                    {/* <span>{item.listPrice /100}</span> <br /> <span>{item.sellingPrice/100}</span> */}
                </div>
            ))
        }
       </div>

      <div className='cart-footer'>
        
       
        <div className="cart-total">

          <div className="cart-sum">
            
            <span className='total'>Total</span>
            <span>{total>0 ? <p>{(total/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>: <p>Carrinho vazio!</p>} 
            </span>

            </div>
          
          {total/100 > 10? <h2 className='free-shipping-tag'>Parabéns, sua compra tem frete grátis!</h2>: ''}

        </div>
          
      </div>
      {
        total> 0 ?
      <div className="complete-purchase">
        <button onClick={()=>alert('compra confirmada')} className='checkout-btn'>FINALIZAR COMPRA</button>
      </div>
      : ''
      }
    </div>
  )
}

export default Cart