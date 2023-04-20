import React, { useEffect, useState } from 'react'
import './productDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import apis from '../../Apis/Apis'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../ReduxStore/index';

const ProductDetails = () => {
    const { getId } = useParams();
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState()
    const globalState = useSelector((state) => state)

    useEffect(() => {
        axios.get(apis.getsingleproductdetails + getId)
            .then(res => setSelectedItem(res?.data))
            .catch(err => console.log(err))
    }, [getId])

    const addToCartHandler = () => {
        selectedItem.count = 1
        dispatch(actions.addToCart(selectedItem))
    }


    return (
        <div className='prod-detail-blk'>
            <img src={selectedItem?.image} style={{ height: '300px', width: '300px' }} />
            <div>
                {
                    selectedItem?.title
                }
            </div>

            {
                globalState.cartItem.length === 0
                    ?
                    <button onClick={addToCartHandler}>Add to cart</button>
                    :
                    globalState?.cartItem.find(cartItem => cartItem.id === parseInt(getId))
                        ?
                        <div>Already in Cart</div>
                        :
                        <button onClick={addToCartHandler}>Add to cart</button>

            }

        </div>
    )
}

export default ProductDetails