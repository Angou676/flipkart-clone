import React from 'react'
import './header.css'
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  const globalState = useSelector((state) => state)
  // console.log("globalState.cartItem", globalState.cartItem)

  const redirectToCheckout = () => {
    navigate(`/cart-list`)
  }


  return (
    <div className='header'
      onClick={redirectToCheckout}
    >
      Cart {globalState?.cartItem < 1 ? null : globalState?.cartItem?.length}
    </div>
  )
}

export default Header