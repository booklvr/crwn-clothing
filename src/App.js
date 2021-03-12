import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignInSignOut from './pages/sign-in-sign-up/SignInSignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user)
      // setCurrentUser(user)
      console.log(user)
    })
  }, [])

  return (
    <div className='App'>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignOut} />
      </Switch>
    </div>
  )
}

export default App
