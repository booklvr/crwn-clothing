import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cartIcon.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

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
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

export default CartIcon
