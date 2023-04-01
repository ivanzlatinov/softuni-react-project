import { Link } from "react-router-dom";
import './Login.css';

export const Login = () => {

    return (
      <div className="body">
        <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
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