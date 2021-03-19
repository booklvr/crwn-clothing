import React from 'react'
import { useDispatch } from 'react-redux'



// ACTIONS
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions'

// STYLES
import {CheckoutItemContainer, ImageContainer, CustomImage, CheckoutItemData, CheckoutItemDataQuantity, QuantityValue, ArrowButton, RemoveButton} from './checkoutItem.styles'
import './checkoutItem.scss'

const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, quantity, price } = cartItem
  const dispatch = useDispatch()
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CustomImage src={imageUrl} alt='item' />
      </ImageContainer>
      <CheckoutItemData>{name}</CheckoutItemData>
      <CheckoutItemDataQuantity className='quantity'>
        <ArrowButton className='arrow' onClick={() => dispatch(removeItem(id))}>
          &#10094;
        </ArrowButton>
        <QuantityValue className='value'>{quantity}</QuantityValue>
        <ArrowButton className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </ArrowButton>
      </CheckoutItemDataQuantity>
      <CheckoutItemData className='price'>{price}</CheckoutItemData>
      <RemoveButton
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(id))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
