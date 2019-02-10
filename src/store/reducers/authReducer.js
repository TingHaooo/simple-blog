import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../actions/actionTypes'
import { SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../actions/actionTypes'
import { LOG_OUT } from '../actions/actionTypes'

const initState = { authError: null };

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SIGN_IN_ERROR:
      console.log('Login failed')
      return {
        ...state,
        authError: 'Login failed'
      }

    case SIGN_IN_SUCCESS:
      console.log('Login success')
      return {
        ...state,
        authError: null
      }

    case LOG_OUT:
      console.log('Logout success')
      return state

    case SIGN_UP_SUCCESS:
      console.log('Signup success');
      return {
        ...state,
        authError: null
      }

    case SIGN_UP_ERROR :
      console.log('Signup failed');
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state
  }
}

export default authReducer
