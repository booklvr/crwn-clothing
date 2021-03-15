import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createStructuredSelector} from 'reselect';

// COMPONENTS
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

// UTILS
import { auth } from '../../firebase/firebase.utils.js'


// SELECTORS
import {selectCurrentUser } from '../../redux/user/user.selectors'
import { selectHidden } from '../../redux/cart/cart.selectors'

// STYLES
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'



const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectHidden)

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
