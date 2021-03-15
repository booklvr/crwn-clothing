import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

// STYLES
import './checkoutItem.scss'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='remove-btn'>&#10005;</span>
    </div>
  )
}

export default CheckoutItem
