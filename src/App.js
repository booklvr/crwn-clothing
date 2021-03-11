import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignInSignOut from './pages/sign-in-sign-up/SignInSignUp'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignOut} />
      </Switch>
    </div>
  )
}

export default App
