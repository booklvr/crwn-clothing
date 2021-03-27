import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

// COMPONENTS
import CartItem from '../cart-item/CartItem'

// ACTIONS
import { toggleCartHidden } from '../../redux/cart/cart.actions'

// SELECTORS
import { selectCartItems } from '../../redux/cart/cart.selectors'

// STYLES
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton
} from './cartDropdown.styles'

const CartDropdown = withRouter(({ history }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  )
})

export default CartDropdown
