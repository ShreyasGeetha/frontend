import { DISABLE_LOGIN_FORM, DISABLE_SIGNUP_FORM, ENABLE_LOGIN_FORM, ENABLE_SIGNUP_FORM } from "../../types/ShowLoginFormTypes";

export const showLoginFormReducer = (state = { shouldShowLoginForm:false }, action) => {

  switch (action.type) {
    case ENABLE_LOGIN_FORM:
      return action.payload
    
    case DISABLE_LOGIN_FORM:
      return action.payload
    
    default:
      return state
  }
}

export const showSignupFormReducer = (state = { shouldShowSignupForm:false }, action) => {

  switch (action.type) {
    case ENABLE_SIGNUP_FORM:
      return action.payload
    
    case DISABLE_SIGNUP_FORM:
      return action.payload
    
    default:
      return state
  }
}