import React from 'react'
import './listOfProduct.css'
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

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
                        return <div className="grid-item"
                        key={val.id}
                            onClick={() => redirectingToProductDetail(val.id)}
                        >
                            <div style={{ height: '160px', padding: '10px 20px', }}>
                                <img src={val.image} style={{ height: '100%', width: '100%', }} />

                            </div>
                            <div style={{ height: '160px', border: '1px solid red' }}>
                                <div>
                                    Rate
                                    {
                                        val.rating.rate
                                    }
                                    Count
                                    {
                                        val.rating.count
                                    }
                                </div>
                                <div>{val.title}</div>

                                <div>
                                    Rs {
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