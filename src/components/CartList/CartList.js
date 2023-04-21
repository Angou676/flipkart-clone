import React, { useState, useEffect } from 'react'
import './cartList.css'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../ReduxStore/index';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const CartList = () => {
    const navigate = useNavigate()
    const globalState = useSelector((state) => state)

    const dispatch = useDispatch();

    useEffect(() => {
        if (globalState?.cartItem?.length === 0) {
            navigate(`/home`)
        }

    }, [globalState?.cartItem?.length])
    const handleRemoveItem = (getId) => {
        dispatch(actions.removeItem({ getId }))
    };

    const handleIncrementItem = (getId) => {
        dispatch(actions.incrementQuantity({ getId }))
    };


    const handleDecrementItem = (getId, getQuantity) => {
        if (getQuantity === 1) {
            handleRemoveItem(getId)
        } else {
            dispatch(actions.decrementQuantity({ getId }))
        }
    };

    return (
        <div className='cart-list-main-cont'>

            <div className='cart-list-blk'>
                {
                    globalState.cartItem?.map(val => {
                        return <>
                            <img src={val.image} style={{ height: '100px', width: '100px' }} />
                            <p>{val.title}</p>
                            <button onClick={() => handleRemoveItem(val.id)} className='cursor-pointer '>Remove</button>

                            <div className='display-flex-style margin-t'>
                                <div className='font-size16'>Price: {val.price}</div>

                                <div className='incre-block'>
                                    <RemoveIcon className='cursor-pointer ' onClick={() => handleDecrementItem(val.id, val.count)} />
                                    <b>{val.count}</b>
                                    <AddIcon className='cursor-pointer ' onClick={() => handleIncrementItem(val.id)} />
                                </div>

                            </div>
                            <hr />
                        </>
                    })
                }
            </div>

            <div className='checkout-block'>

                <div className='checkout-btn'>
                    Checkout
                </div>
            </div>
        </div>
    )
}

export default CartList
