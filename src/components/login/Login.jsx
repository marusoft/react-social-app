import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">MarusoftSocial</h3>
          <span className="login-description"> Connect with Friends and the world around you on MarusoftSocial</span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input type="text" placeholder="Email" className="login-input" />
            <input type="text" placeholder="Password" className="login-input" />
            <button className="login-button">Log In</button>
            <span className="login-forget-password">Forget password?</span>
            <button className="login-register-button">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
