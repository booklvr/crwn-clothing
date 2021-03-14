import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInSignUp'
import Header from './components/header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'

// class App extends React.Component {
const App = () => {
  const dispatch = useDispatch()
  const [userAuth, setUserAuth] = useState(null)
  const { currentUser } = useSelector((state) => state.user)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        setUserAuth(userAuth)
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          )
        })
      } else {
        dispatch(setCurrentUser(null))
      }
    })

    return unsubscribeFromAuth
  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
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
