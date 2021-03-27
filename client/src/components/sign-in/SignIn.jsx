import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// COMPONENTS
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

// ACTIONS
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.actions'

// STYLES
import { SignInContainer, SignInTitle, ButtonsContainer } from './signIn.styles'

const SignIn = () => {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(emailSignInStart({ email, password }))
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type='email'
          name='email'
          value={email}
          label={'Email'}
          handleChange={setEmail}
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          label={'Password'}
          handleChange={setPassword}
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn={true}
            onClick={() => dispatch(googleSignInStart())}
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
