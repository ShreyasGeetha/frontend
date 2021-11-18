import axios from "axios"
import {
  USER_EMAIL,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PASSWORD,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../types/userTypes"

export const login = (email, password) => async (dispatch) =>{
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      header: {
        'Content-Type': 'application/json'
      }      
    }
 
    const {data} = await axios.post(
      '/api/users/login',
      { email, password },
      config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
    
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  try {
    console.log('logout dispatcher')
  dispatch({
      type: USER_LOGOUT
  })
} catch (error) {
  
  }
}

export const setEmail = (email) => (dispatch) => {
  try {
    dispatch({
      type: USER_EMAIL,
      payload: email
    })
  } catch (error) {
    
  }
}

export const setPassword = (password) => (dispatch) => {
  try {
    dispatch({
      type: USER_PASSWORD,
      payload: password
    })
  } catch (error) {
    
  }
}

export const register = (name, email, password) => async (dispatch) =>{
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })
    const config = {
      header: {
        'Content-Type': 'application/json'
      }      
    }

    const {data} = await axios.post(
      '/api/users',
      {name, email, password },
      config)
    
     dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
     })
    
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))    
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}