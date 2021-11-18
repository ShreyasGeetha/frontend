import { ENABLE_LOGIN_FORM, DISABLE_LOGIN_FORM } from "../types/ShowLoginFormTypes"

// export const showLoginForm = (isTrue) => async (dispatch) => {
//   try {
//         console.log('3')
//       dispatch({
//       type: ENABLE_LOGIN_FORM,
//       payload: isTrue
//     })
//   } catch (error) {
    
//   }
  
// }
export const showLoginForm = (isLoginForm) => async (dispatch) =>{
  try {
    dispatch({
      type: ENABLE_LOGIN_FORM,
      payload: isLoginForm
    })
  } catch (error) {
    
  }
}

export const exitLoginForm = (isLoginForm) => async (dispatch) =>{
  try {
    dispatch({
      type: DISABLE_LOGIN_FORM,
      payload: isLoginForm
    })
  } catch (error) {
    
  }
}