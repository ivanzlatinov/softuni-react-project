import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Login.css';

export const Login = () => {
  useEffect(() => {
    document.title = 'Login'
  }, [])


    return (
      <div className="body">
        <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label htmlFor="email">Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label htmlFor="password">Password</label>
        </div>
        
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <Link to='/register'>Signup</Link>
        </div>
      </form>
    </div>
    </div>
    );

}