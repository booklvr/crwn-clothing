import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

// PAGES
import CollectionPage from '../collectionPage/CollectionPage'

// COMPONENTS
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'


const ShopPage = ({ match }) => {
  console.log(match)
  return (
    <div className='shop-page'>
      <Route path={`${match.path}/overview`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
