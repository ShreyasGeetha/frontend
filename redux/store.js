// Connect all reducers and add middleware here
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/products/productReducer'
import { productDetailsReducer } from './reducers/products/productDetailsReducer'
import {cartReducer } from './reducers/cart/cartReducer'
import { showLoginFormReducer, showSignupFormReducer } from './reducers/cart/showLoginFormReducer';
import {userRegisterReducer, setEmailReducer, setPasswordReducer, userLoginReducer} from './reducers/user/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  shouldShowLoginForm: showLoginFormReducer,
  shouldShowSignupForm: showSignupFormReducer,
  userLogin: userLoginReducer,
  email: setEmailReducer,
  password: setPasswordReducer,
  userRegister: userRegisterReducer
})

const cartItemsFromStorage = [{}]
const userInfoFromStorage = [{}]
const currentProductIdFromStorage = [{}]

if (typeof window !== 'undefined') {
  // Perform localStorage action
  cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
}

if (typeof window !== 'undefined') {
  // Perform localStorage action
  userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : []
}

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  shouldShowLoginForm: false,
  shouldShowSignupForm: false,
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;