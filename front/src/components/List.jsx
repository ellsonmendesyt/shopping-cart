import React from 'react'
import Item from './Item';
import './list.scss';


const List = ({items,onAdd}) => {
  return (
    <div className='list'>
    {
        items.length>0 && items.map((item)=>(
            <Item onAdd={onAdd} key={item.id} item={item}/>
        ))
    }
    </div>
  )
}

export default List