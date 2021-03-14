import React, {useState} from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';
import './signIn.scss'


const SignIn = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('')
      setPassword('')

    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={e => handleSubmit(e)}>
        
        <FormInput type="email" name="email" value={email} label={'Email'} handleChange={setEmail} required/>
        
        <FormInput type="password" name="password" value={password} label={'Password'} handleChange={setPassword} required/>
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
        </div>
       
        
      </form>
    </div>
  )
}

export default SignIn