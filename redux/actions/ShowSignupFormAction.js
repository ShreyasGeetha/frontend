import {ENABLE_SIGNUP_FORM, DISABLE_SIGNUP_FORM } from "../types/ShowLoginFormTypes"


export const showSignupForm = (isLoginForm) => async (dispatch) =>{
  try {
    dispatch({
      type: ENABLE_SIGNUP_FORM,
      payload: isLoginForm
    })
  } catch (error) {
    
  }
}

export const exitSignupForm = (isLoginForm) => async (dispatch) =>{
  try {
    dispatch({
      type: DISABLE_SIGNUP_FORM,
      payload: isLoginForm
    })
  } catch (error) {
    
  }
}