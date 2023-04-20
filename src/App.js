import React, { useEffect } from 'react'
import apis from './Apis/Apis';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/index'


import { useSelector, useDispatch } from 'react-redux';
// import { actions } from '../../store/index';
import { actions } from './ReduxStore/index';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartList from './components/CartList/CartList';
import Header from './components/Header/Header';


function App() {
  const dispatch = useDispatch();

  const globalState = useSelector((state) => state)

  useEffect(() => {
    axios.get(apis.listofproduct)
      .then(res => {
        // console.log("gvytvdfgvbgf", res.data)
        dispatch(actions.setListOfItems(res.data))
        dispatch(actions.setListOfItemsStore(res.data))
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path='/home' element={<LandingPage />} />

          <Route path='/product-details/:getId' element={<ProductDetails />} />

          <Route path='/cart-list' element={<CartList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
