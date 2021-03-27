import React from 'react'

// STYLES
import { CartItemContainer, ItemDetailsContainer } from './cartItem.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} * {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItem
