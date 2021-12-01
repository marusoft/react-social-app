import "./register.css"

const Register = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">MarusoftSocial</h3>
          <span className="login-description"> Connect with Friends and the world around you on MarusoftSocial</span>
        </div>
        <div className="login-right">
          <div className="login-box">
          <input type="text" placeholder="Username" className="login-input" />
            <input type="text" placeholder="Email" className="login-input" />
            <input type="text" placeholder="Password" className="login-input" />
            <input type="text" placeholder="Password Again" className="login-input" />
            <button className="login-button">Sign Up</button>
            <button className="login-register-button">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
