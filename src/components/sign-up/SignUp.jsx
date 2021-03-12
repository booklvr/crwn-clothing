import React, {useState} from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './signUp.scss'

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName})

      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

    } catch(error) {
      console.error(error);
    }
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={e => handleSubmit(e)}>
        <FormInput type="text" name="displayName" value={displayName} label={'DisplayName'} handleChange={setDisplayName} required/>
        <FormInput type="email" name="email" value={email} label={'Email'} handleChange={setEmail} required/>
        
        <FormInput type="password" name="password" value={password} label={'Password'} handleChange={setPassword} required/>
        <FormInput type="password" name="confirmPassword" value={confirmPassword} label={'ConfirmPassword'} handleChange={setConfirmPassword} required/>
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
         
        </div>
       
        
      </form>
    </div>
  )
}

export default SignUp
