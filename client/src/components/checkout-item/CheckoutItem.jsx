import React from 'react'
import { useDispatch } from 'react-redux'

// ACTIONS
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions'

// STYLES
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkoutItem.styles'

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
