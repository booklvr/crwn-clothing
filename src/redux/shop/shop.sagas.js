import { call, put, takeLatest } from 'redux-saga/effects'

// CONSTANTS
import { FETCH_COLLECTIONS_START } from './shop.constants'

// UTILS
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'

// ACTIONS
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
