import { useEffect } from 'react';
import './Register.css'
import  { Link } from 'react-router-dom'

export const Register = () => {

  useEffect(() => {
    document.title = 'Register'
  }, [])

    return (
        <div className='body'>
        <div className="center">
        <h1>Register</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label htmlFor='email'>Email</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label htmlFor='username'>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label htmlFor='password'>Password</label>
          </div>
          <div className="txt_field">
              <input type="repass" required />
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