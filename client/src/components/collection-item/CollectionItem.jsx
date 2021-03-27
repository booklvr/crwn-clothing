import React from 'react'
import { useDispatch } from 'react-redux'

// ACTIONS
import { addItem } from '../../redux/cart/cart.actions'

// STYLES
import {
  AddToCartButton,
  CollectionFooterContainer,
  CollectionItemContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collectionItem.styles'

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()

  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddToCartButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </AddToCartButton>
    </CollectionItemContainer>
  )
}

export default CollectionItem
