import React, { useEffect, useState } from 'react';
import './category.css'
import axios from 'axios';
import apis from '../../Apis/Apis';

import { useSelector, useDispatch } from 'react-redux';
// import { actions } from '../../store/index';
import { actions } from '../../ReduxStore/index';

const Category = () => {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state)

    const [category, setCategory] = useState();

    useEffect(() => {
        axios.get(apis.listofcategory)
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, [])

    const displayAllHandler = () => {
        dispatch(actions.setListOfItems(globalState.listOfItemsStore))
    }

    const categorySelectionHandler = (getCat) => {
        axios.get(apis.listofproductbycategory + getCat)
            .then(res => {
                dispatch(actions.setListOfItems(res.data))
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='cat-block'>
            <div className="category-list">
                <ul>
                    <li style={{ border: '1px solid red' }}
                        onClick={displayAllHandler}
                    >
                        All items
                    </li>
                    {
                        category?.map((val, idx) => {
                            return <li style={{ border: '1px solid red' }}
                                key={idx}
                                onClick={() => categorySelectionHandler(val)}
                            >
                                {val}
                            </li>

                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Category