import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/CartItem'
import CustomButton from '../custom-button/CustomButton'
import './cartDropdown.scss'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
