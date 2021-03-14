import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import { auth } from '../../firebase/firebase.utils.js'
import './header.scss'
import CartDropdown from '../cart-dropdown/CartDropdown'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { hidden } = useSelector((state) => state.cart)
  console.log('currentUser', currentUser)

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className='option'
            onClick={() => {
              auth.signOut()
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  )
}

export default Header
