import React from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

// UTILS
import { auth } from '../../firebase/firebase.utils.js'

// SELECTORS
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectHidden } from '../../redux/cart/cart.selectors'

// STYLES
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles.js'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectHidden)

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as='div'
            onClick={() => {
              auth.signOut()
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header
