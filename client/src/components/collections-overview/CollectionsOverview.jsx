import React from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import CollectionPreview from '../collection-preview/CollectionPreview'

// SELECTORS
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

// STYLES
import { CollectionOverviewContainer } from './collectionOverview.styles'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </CollectionOverviewContainer>
  )
}

export default CollectionsOverview
