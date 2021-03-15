import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

// COMPONENTS
import CartItem from '../cart-item/CartItem'
import CustomButton from '../custom-button/CustomButton'

// ACTIONS
import { toggleCartHidden } from '../../redux/cart/cart.actions'

// SELECTORS
import { selectCartItems } from '../../redux/cart/cart.selectors'

// STYLES
import './cartDropdown.scss'

const CartDropdown = withRouter(({ history }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
})

export default CartDropdown
