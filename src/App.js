import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'

// PAGES
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInSignUp'
import CheckoutPage from './pages/checkoutPage/CheckoutPage'

// COMPONENTS
import Header from './components/header/Header'

// ACTIONS
import { checkUserSession } from './redux/user/user.actions'

// SELECTORS
import { selectCurrentUser } from './redux/user/user.selectors'

const App = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log('CURRENT_USER', currentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  )
}

export default App
