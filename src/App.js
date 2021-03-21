import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInSignUp'
import CheckoutPage from './pages/checkoutPage/CheckoutPage'

import Header from './components/header/Header'

import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utils'

// selectors
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
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
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// import React, { useEffect, useState } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'
// // import { connect } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'

// // PAGES
// import HomePage from './pages/homepage/HomePage'
// import ShopPage from './pages/shopPage/ShopPage'
// import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInSignUp'
// import CheckoutPage from './pages/checkoutPage/CheckoutPage'

// // COMPONENTS
// import Header from './components/header/Header'

// // UTILS
// import {
//   auth,
//   createUserProfileDocument,
//   addCollectionAndDocuments,
// } from './firebase/firebase.utils'

// // ACTIONS
// import { setCurrentUser } from './redux/user/user.actions'

// // SELECTORS
// import { selectCurrentUser } from './redux/user/user.selectors'
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors'

// // STYLE
// import './App.css'

// // class App extends React.Component {
// const App = () => {
//   const dispatch = useDispatch()
//   const [userAuth, setUserAuth] = useState(null)
//   const currentUser = useSelector(selectCurrentUser)
//   const collectionsArray = useSelector(selectCollectionsForPreview)

//   console.log('collectionsArray', collectionsArray)

//   useEffect(() => {
//     const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth)

//         setUserAuth(userAuth)
//         userRef.onSnapshot((snapShot) => {
//           dispatch(
//             setCurrentUser({
//               id: snapShot.id,
//               ...snapShot.data(),
//             })
//           )
//         })
//       } else {
//         dispatch(setCurrentUser(null))
//       }
//     })
//     dispatch(addCollectionAndDocuments('collections', collectionsArray))

//     return unsubscribeFromAuth
//   }, [dispatch, collectionsArray])

//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/shop' component={ShopPage} />
//         <Route
//           exact
//           path='/signin'
//           render={() =>
//             currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
//           }
//         />
//         <Route exact path='/checkout' component={CheckoutPage} />
//       </Switch>
//     </div>
//   )
// }

// export default App
