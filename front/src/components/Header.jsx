import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom';

const Header = ({cartItems}) => {
  return (
    <header>
       <Link to='/' className="brand">
           <h1>ShopNow</h1>
       </Link>
       <Link to='/shopping-cart' className="cart">
       <svg width={30} viewBox="0 0 26.6 25.6" >
           <polyline fill="#fff" points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.5"></polyline><circle cx="10.7" cy="23" r="2.2" stroke="#fff" fill='#fff'></circle><circle cx="19.7" cy="23" r="2.2" stroke="#fff" fill='#fff'></circle></svg>
       <span>{cartItems.length}</span>
       </Link>
    </header>
  )
}

export default Header