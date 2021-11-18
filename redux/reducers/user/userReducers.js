import {
  USER_EMAIL,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
  USER_PASSWORD
} from "../../types/userTypes"

export const userLoginReducer = (state = {}, action) => {
 
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true}
    case USER_LOGIN_SUCCESS:
      return {loading: false, userInfo: action.payload, isUserloggedIn:true}
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      //console.log('final logout step')
      return { isUserloggedIn: false}
    
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
 
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {loading: true}
    case USER_REGISTER_SUCCESS:
      return {loading: false, userInfo: action.payload}
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
 
    default:
      return state
  }
}


export const setEmailReducer = (state = {email:''}, action) => {
  switch (action.type) {
    case USER_EMAIL:
      return action.payload
    default:
      return state
  }
}

export const setPasswordReducer = (state = {password:''}, action) => {
  switch (action.type) {
    case USER_PASSWORD:
      return action.payload
    default:
      return state
  }
}
