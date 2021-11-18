import axios from 'axios';
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../types/productTypes';

//action creators
export const listProducts = () => async (dispatch) =>{
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    
    const { data } = await axios.get('/api/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const listProductDetails = (id) => async (dispatch, getState) =>{
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    console.log('222')
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    })    
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
  //localStorage.setItem('currentViewProduct', JSON.stringify(getState().productDetails.product))
}