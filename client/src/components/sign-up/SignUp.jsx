import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import './signUp.scss'
import { SignUpContainer, SignUpTitle } from './signUp.styles'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = () => {
  const dispatch = useDispatch()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }


    dispatch(signUpStart({email, password, displayName}))
    setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   )
    //   await createUserProfileDocument(user, { displayName })

    //   setDisplayName('')
    //   setEmail('')
    //   setPassword('')
    //   setConfirmPassword('')
    // } catch (error) {
    //   console.error(error)
    // }
  }
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label={'DisplayName'}
          handleChange={setDisplayName}
          required
        />
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
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label={'ConfirmPassword'}
          handleChange={setConfirmPassword}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
        </div>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
