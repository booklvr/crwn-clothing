import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// PAGES
import CollectionPage from '../collectionPage/CollectionPage'

// COMPONENTS
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import WithSpinner from '../../components/with-spinner/WithSpinner'

// ACTIONS
import { updateCollections } from '../../redux/shop/shop.actions'

// UTILS
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(updateCollections(collectionsMap))
      setLoading(false)
    })
    // const unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //     dispatch(updateCollections(collectionsMap))
    //     setLoading(false)
    //   }
    // )
    // return unsubscribeFromSnapshot
  }, [dispatch])

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  )
}

export default ShopPage
