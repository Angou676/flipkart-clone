import React, { useEffect, useState } from 'react'
import './productDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import apis from '../../Apis/Apis'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../ReduxStore/index';
import StarIcon from '@mui/icons-material/Star';

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

    console.log(selectedItem)

    return (
        <div className='prod-detail-blk'>
            <div className='prod-img-block'>
                <img src={selectedItem?.image} className='height-width-max' />

            </div>
            <div className='prod-detail-subblk'>
                <div className='prod-title-style'>
                    {
                        selectedItem?.title
                    }
                </div>

                <div className='margin-top-15 '>
                    {
                        selectedItem?.description
                    }
                </div>

                <div className='margin-t display-flex-stylelist'>
                    <span className='rating-style color-white'>
                        {selectedItem?.rating.rate}
                        <StarIcon className='font-size18' />
                    </span>
                    <span className='font-size14'>
                        ({
                            selectedItem?.rating.count
                        })
                    </span>

                </div>

                <div className='margin-t' style={{ textTransform: 'capitalize' }}>
                    {selectedItem?.category}
                </div>

                <div className='margin-top-15 btn-blk '>

                    {
                        globalState.cartItem.length === 0
                            ?
                            <div onClick={addToCartHandler} className='cursor-pointer '>Add to cart</div>
                            :
                            globalState?.cartItem.find(cartItem => cartItem.id === parseInt(getId))
                                ?
                                <div>Already in Cart</div>
                                :
                                <div onClick={addToCartHandler} className='cursor-pointer '>Add to cart</div>

                    }
                </div>

            </div>
        </div>
    )
}

export default ProductDetails