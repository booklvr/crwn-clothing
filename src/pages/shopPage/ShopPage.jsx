import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// PAGES
import CollectionPage from '../collectionPage/CollectionPage'

// COMPONENTS
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import WithSpinner from '../../components/with-spinner/WithSpinner'

// SELECTORS
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors'

// ACTIONS
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()
  const isCollectionFetching = useSelector(selectIsCollectionFetching)
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded)

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  )
}

export default ShopPage
