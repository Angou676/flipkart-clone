import React, { useState, useEffect } from 'react'
import './cartList.css'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../ReduxStore/index';

const CartList = () => {


    const globalState = useSelector((state) => state)
    console.log("globalState.cartItem", globalState)


    useEffect(() => {
    }, [globalState.cartItem])


    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch(addItem(item));
    };

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
        <div style={{ marginTop: '100px' }}>

            {
                globalState.cartItem?.map(val => {
                    console.log(val)
                    return <>
                        <img src={val.image} style={{ height: '100px', width: '100px' }} />
                        <h2>{val.name}</h2>
                        <div>{val.count}</div>
                        <p>{val.description}</p>
                        <p>Price: {val.price}</p>
                        <button onClick={handleAddItem}>Add to cart</button>
                        <button onClick={() => handleDecrementItem(val.id, val.count)}>-</button>
                        <button onClick={() => handleIncrementItem(val.id)}>+</button>

                        <button onClick={() => handleRemoveItem(val.id)}>Remove</button>
                    </>
                })
            }
        </div>
    )
}

export default CartList
