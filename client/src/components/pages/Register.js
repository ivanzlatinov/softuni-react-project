
import './Register.css'
import  { Link } from 'react-router-dom'

export const Register = () => {

    return (
        <div className='body'>
        <div className="center">
        <h1>Register</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
              <input type="repass" required />
              <span></span>
              <label>Repeat password</label>
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