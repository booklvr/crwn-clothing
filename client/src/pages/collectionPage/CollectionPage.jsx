import React from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import CollectionItem from '../../components/collection-item/CollectionItem'

// SELECTORS
import { selectShopCollection } from '../../redux/shop/shop.selectors'
import {
  CollectionItemContainer,
  CollectionPageContainer,
  CollectionTitle,
} from './collectionPage.styles'

// STYLES

const CollectionPage = ({ match: { params } }) => {
  const { title, items } = useSelector(
    selectShopCollection(params.collectionId)
  )

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemContainer>
    </CollectionPageContainer>
  )
}

export default CollectionPage
