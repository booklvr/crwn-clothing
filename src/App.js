import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInSignUp'
import CheckoutPage from './pages/checkoutPage/CheckoutPage'

import Header from './components/header/Header'

// selectors
import { selectCurrentUser } from './redux/user/user.selectors'

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  

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

