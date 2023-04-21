import React from 'react'
import './header.css'
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';



const Header = () => {
  const navigate = useNavigate()
  const globalState = useSelector((state) => state)

  const redirectToCheckout = () => {
    navigate(`/cart-list`)
  }


  return (
    <div className='header display-flex-style'
    >
      <div className='width-center-blk display-flex-style'>
        <div className='cursor-pointer'
        onClick={()=>navigate(`/home`)}
        >
          Flipkart Clone
        </div>
        <div className='display-flex-style cursor-pointer'
          onClick={redirectToCheckout}
          x
        >
          <Badge badgeContent={globalState?.cartItem < 1 ? null : globalState?.cartItem?.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
          &nbsp;
          Cart 
        </div>
      </div>
    </div>
  )
}

export default Header