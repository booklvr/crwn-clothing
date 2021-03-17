import React from 'react'
import { useSelector } from 'react-redux'

// Components
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'

// SELECTORS
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'

// STYLES
import './checkoutPage.scss'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'>
        <span>Total: {total}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        card#: 4242 4242 4242 4242
        <br />
        expires: 04/21
        <br />
        cvv: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

export default CheckoutPage
