import React from 'react'
import { useDispatch } from 'react-redux'

// ACTIONS
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions'

// STYLES
import './checkoutItem.scss'

const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, quantity, price } = cartItem
  const dispatch = useDispatch()
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(id))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(id))}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
