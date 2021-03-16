import React from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import CollectionPreview from '../collection-preview/CollectionPreview'

// SELECTORS
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

// STYLES
import './collectionsOverview.scss'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </div>
  )
}

export default CollectionsOverview
