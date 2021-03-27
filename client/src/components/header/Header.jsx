import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// COMPONENTS
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

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
import { signOutStart } from '../../redux/user/user.actions'

const Header = () => {
  const dispatch = useDispatch()
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
              dispatch(signOutStart())
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
