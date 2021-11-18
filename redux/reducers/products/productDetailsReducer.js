import {PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../../types/productTypes';

export const productDetailsReducer = (state = { product: { sizes: []} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {loading: true, ...state}
    case PRODUCT_DETAILS_SUCCESS:      
      return {loading: false, product: action.payload, id:action.payload._id}
    case PRODUCT_DETAILS_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}
