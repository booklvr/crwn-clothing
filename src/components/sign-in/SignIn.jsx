import React, { useState } from 'react'

// COMPONENTS
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

// UTILS
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'

// STYLES
import { SignInContainer, SignInTitle, ButtonsContainer } from './signIn.styles'

const SignIn = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error(error)
    }
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
          <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
