import React from 'react'

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

import { SignInSignUpContainer } from './signInSignUp.styles'

const SignInSignUp = () => {
  return (
    <SignInSignUpContainer>
      <SignIn/>
      <SignUp />
    </SignInSignUpContainer>
  )
}

export default SignInSignUp
