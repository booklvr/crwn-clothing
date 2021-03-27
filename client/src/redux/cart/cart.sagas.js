import { all, call, takeLatest, put } from 'redux-saga/effects'

// CONSTANTS
import { SIGN_OUT_SUCCESS } from '../user/user.constants'

// ACTIONS
import { clearCart } from './cart.actions'

export function* clearOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
