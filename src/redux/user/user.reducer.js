import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
} from './user.constants'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload,
      }

    default:
      return state
  }
}

export default userReducer
