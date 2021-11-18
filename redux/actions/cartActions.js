import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../types/cartTypes";
import axios from 'axios';

export const addToCart = (id) => async (dispatch, getState) =>{
  try {
        
    const { data } = await axios.get(`/api/products/${id}`);
    const selectedSize = ''
    data.sizes.map(size => {
      if (size.isSelected) {
        selectedSize = size.name
      }
    })
    
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        _id: data._id,
        name: data.name,
        imageSrc: data.imageSrc,
        imageAlt: data.imageAlt,
        brand: data.brand,
        color: data.color,
        size: selectedSize
      }
    })
  } catch (error) {
    
  }

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) =>{
  try {
        
      dispatch({
      type: CART_DELETE_ITEM,
      payload: id
    })
  } catch (error) {
    
  }
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}