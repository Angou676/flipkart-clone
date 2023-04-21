import React from 'react'
import './listOfProduct.css'
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';

const ListOfProduct = () => {
    const navigate = useNavigate()

    const globalState = useSelector((state) => state)

    const redirectingToProductDetail = (getId) => {
        navigate(`/product-details/${getId}`)
    }


    return (
        <div className='cart-container'>
            <div className="grid-container">
                {
                    globalState.listOfItems.map(val => {
                        return <div className="grid-item cursor-pointer "
                            key={val.id}
                            onClick={() => redirectingToProductDetail(val.id)}
                        >
                            <div className='img-blck'>
                                <img src={val.image} className='height-width-max' />

                            </div>
                            <div className='height90'>
                                <div className='title-style'>{val.title}</div>

                                <div className='margin-t display-flex-stylelist'>
                                    <span className='rating-style color-white'>
                                        {val.rating.rate}
                                        <StarIcon className='font-size18' />
                                    </span>
                                    <span className='font-size14'>
                                        ({
                                            val.rating.count
                                        })
                                    </span>
                                </div>
                                <div className='margin-t font-size16'>
                                    ₹
                                    {
                                        val.price
                                    }
                                </div>
                            </div>
                        </div>

                    })
                }

            </div>

        </div>
    )
}

export default ListOfProduct