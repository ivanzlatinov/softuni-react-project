import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import './Login.css';

export const Login = () => {
  useEffect(() => {
    document.title = 'Login'
  }, [])

 
  const { onLoginSubmit } = useContext(AuthContext);
  const {values, changeHandler, onSubmit} = useForm({
    email: '',
    password: '',
  }, onLoginSubmit)

  

    return (
      <div className="body">
        <div className="center">
      <h1>Login</h1>
      <form id="login" method="POST" onSubmit={onSubmit}>
        <div className="txt_field">
          <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          value={values.email}
          onChange={changeHandler}
          />
          <span></span>
          <label htmlFor="email">Email</label>
        </div>
        <div className="txt_field">
          <input 
          type="password" 
          id="login-password" 
          name="password" 
          required 
          value={values.password}
          onChange={changeHandler}
          />
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