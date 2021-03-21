import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

// PAGES
import CollectionPage from '../collectionPage/CollectionPage'

// COMPONENTS
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'

// UTILS
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const ShopPage = ({ match }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapshotToMap(snapshot)
    })
    // return unsubscribeFromSnapshot()
  }, [])

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
