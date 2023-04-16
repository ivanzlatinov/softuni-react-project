import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import './Register.css'
import  { Link } from 'react-router-dom'

export const Register = () => {

  useEffect(() => {
    document.title = 'Register'
  }, [])

const { onRegisterSubmit } = useContext(AuthContext);
const [isValid, setIsValid] = useState(false);
const {values, changeHandler, onSubmit} = useForm({
  email: '',
  password: '',
  repass: '',
}, onRegisterSubmit)

const [error, setError] = useState({
  email: '',
  password: '',
  repass: ''

 });

 const validateEmail = (e) => {
  const email = e.target.value;
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
  let errorMessage = '';
  if(email.length === 0){
    errorMessage = 'Please enter an email'
  }else if (emailPattern.test(email) !== true){
    errorMessage = 'Please enter a valid email'
  }else{
    setIsValid(true)
  }

  setError(state => ({
    ...state,
    email: errorMessage,
  }))
 }

 const validatePassword = (e) => {
  const password = e.target.value;
  let errorMessage = '';
  if(password.length === 0){
    errorMessage = 'Please enter a password.'
  }else if(password.length < 5){
  errorMessage = 'Password must be atleast 5 characters long.'
  }else{
    setIsValid(true)
  }

  setError(state => ({
    ...state,
    password: errorMessage,
  }))
 }

 const validateRepass = (e) => {
  const repass = e.target.value;
  let errorMessage = '';
  if(repass !== values.password){
    errorMessage = 'Passwords dont match.'
  }else{
    setIsValid(true)
  }

  setError(state => ({
    ...state,
    password: errorMessage,
  }))
 }

    return (
        <div className='body'>
        <div className="center">
        <h1>Register</h1>
        <form id='register' method="post" onSubmit={onSubmit}>

          <div className="txt_field">
            <input 
            type="text" 
            id='email' 
            name='email' 
            value={values.email}
            onChange={changeHandler}
            onBlur={validateEmail}
            />
            <span></span>
            <label htmlFor='email'>Email</label>
          </div>
          {error.email &&
          <p className="error">{error.email}</p>
        }
    
          <div className="txt_field">
            <input 
            type="password" 
            id='password' 
            name='password' 
            value={values.password}
            onChange={changeHandler}
            onBlur={validatePassword}
            />
            <span></span>
            <label htmlFor='password'>Password</label>
          </div>
          {error.password &&
          <p className="error">{error.password}</p>
        }
          <div className="txt_field">
              <input 
              type="password" 
              id='repass' 
              name='repass' 
              value={values.repass}
              onChange={changeHandler}
              onBlur={validateRepass}
              />
              <span></span>
              <label htmlFor='repass'>Repeat password</label>
            </div>
            {error.repass &&
          <p className="error">{error.repass}</p>
        }
            <fieldset className="register-fieldset-wrap"  disabled={isValid ? false : true}>
          <input type="submit" value="Register" onClick={onSubmit}/>
          </fieldset>
          <div className="signup_link">
           Already have an account?<Link to='/login'>Log in</Link>
          </div>
        </form>
      </div>
      </div>

    );
}