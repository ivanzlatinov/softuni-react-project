import { useEffect } from 'react';
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
const {values, changeHandler, onSubmit} = useForm({
  email: '',
  password: '',
  repass: '',
}, onRegisterSubmit)

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
            required
            value={values.email}
            onChange={changeHandler}
            />
            <span></span>
            <label htmlFor='email'>Email</label>
          </div>
          
    
          <div className="txt_field">
            <input 
            type="password" 
            id='password' 
            name='password' 
            required
            value={values.password}
            onChange={changeHandler}
            />
            <span></span>
            <label htmlFor='password'>Password</label>
          </div>

          <div className="txt_field">
              <input 
              type="password" 
              id='repass' 
              name='repass' 
              required
              value={values.repass}
              onChange={changeHandler}
              />
              <span></span>
              <label htmlFor='repass'>Repeat password</label>
            </div>
          
          <input type="submit" value="Register" />
          <div className="signup_link">
           Already have an account?<Link to='/login'>Log in</Link>
          </div>
        </form>
      </div>
      </div>

    );
}