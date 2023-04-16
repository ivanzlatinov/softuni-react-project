import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import './Login.css';

export const Login = () => {
  useEffect(() => {
    document.title = 'Login'
  }, [])

  const [isValid, setIsValid] = useState(false);
  const { onLoginSubmit } = useContext(AuthContext);
  const {values, changeHandler, onSubmit} = useForm({
    email: '',
    password: '',
  }, onLoginSubmit)

  const [error, setError] = useState({
    email: '',
    password: '',
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

    return (
      <div className="body">
        <div className="center">
      <h1>Login</h1>
      <form id="login" method="POST" >
        <div className="txt_field">
          <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          value={values.email}
          onBlur={validateEmail}
          onChange={changeHandler}
          />
          <span></span>
          <label htmlFor="email">Email</label>
        </div>
        {error.email &&
          <p className="error">{error.email}</p>
        }
        <div className="txt_field">
          <input 
          type="password" 
          id="login-password" 
          name="password" 
          required 
          value={values.password}
          onBlur={validatePassword}
          onChange={changeHandler}
          />
          <span></span>
          <label htmlFor="password">Password</label>
        </div>
        {error.password &&
          <p className="error">{error.password}</p>
        }
        <fieldset className="register-fieldset-wrap"  disabled={isValid ? false : true}>
        <input type="submit" value="Login"  onClick={onSubmit}/>
        </fieldset>
        <div className="signup_link">
          Not a member? <Link to='/register'>Signup</Link>
        </div>
      </form>
    </div>
    </div>
    );

}