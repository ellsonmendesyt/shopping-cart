import React from 'react'
import './item.scss';



const Item = ({item,onAdd}) => {
  return (
    <div  className='item' >
        <div className="item-overlay">
            <button onClick={()=>{onAdd(item)}}>Add to Cart</button>
        </div>

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