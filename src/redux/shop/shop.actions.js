// UTILS
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'

// CONSTANTS
import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from './shop.constants'

// ACTIONS
export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections')
  dispatch(fetchCollectionsStart())
  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)

      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
}
