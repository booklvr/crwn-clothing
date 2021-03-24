import { takeLatest, put, all, call } from 'redux-saga/effects'

// UTILS
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils'
import { signInFailure, signInSuccess } from './user.actions'

// CONSTANTS
import { EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START } from './user.constants'

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}
