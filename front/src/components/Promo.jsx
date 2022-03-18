import React from 'react'
import shipping from '../resources/images/shipping.svg'
import './promo.scss';

const Promo = ({minPrice}) => {

    // console.log(minPrice)
    const price=minPrice;
  return (
    <div className='promo'>
        <img width='50' src={shipping} alt="" />
         <div className="free-shipping">
             FRETE GRÁTIS NAS COMPRAS ACIMA DE &nbsp; 
             <span className='full-price'>{parseInt(price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} &nbsp;</span>
         </div>
    </div>
  )
}

export default Promo