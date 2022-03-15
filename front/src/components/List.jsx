import React from 'react'
import Item from './Item';
import './list.scss';


const List = ({items}) => {
  return (
    <div className='list'>
    {
        items.length>0 && items.map((item)=>(
            <Item key={item.id} item={item}/>
        ))
    }
    </div>
  )
}

export default List