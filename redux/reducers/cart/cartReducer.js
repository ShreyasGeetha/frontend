import {CART_ADD_ITEM, CART_DELETE_ITEM} from '../../types/cartTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const currentProduct = action.payload;
      return {
        ...state,
        cartItems: [...state.cartItems, currentProduct]
      }
    case CART_DELETE_ITEM:      
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x._id !== action.payload)
      }    
    default:
      return state
  }
}

