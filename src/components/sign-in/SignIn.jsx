import React, {useState, useEffect} from 'react'
import FormInput from '../form-input/FormInput'
// import './signIn.scss'


const SignIn = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    console.log('email', email);
    console.log('password', password);
  }, [email, password])

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={e => handleSubmit(e)}>
        
        <FormInput type="email" name="email" value={email} label={'Email'} handleChange={setEmail} required/>
        
        <FormInput type="password" name="password" value={password} label={'Password'} handleChange={setPassword} required/>
        <input type="submit" value="Submit" />
        
      </form>
    </div>
  )
}

export default SignIn
