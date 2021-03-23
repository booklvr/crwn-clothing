import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// ACTIONS
import { toggleCartHidden } from '../../redux/cart/cart.actions'

// SELECTORS
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'


// STYLES
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
} from './cartIcon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()
  const itemCount = useSelector(selectCartItemsCount)
  // const itemCount = cartItems.reduce(
  //   (accumulatedQuantity, { quantity }) => accumulatedQuantity + quantity,
  //   0
  // )

  // const handleClick = () => {
  //   dispatch(toggleCartHidden())
  // }
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

export default CartIcon
