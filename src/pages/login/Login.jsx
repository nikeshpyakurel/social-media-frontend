import React from "react";
import "./login.css";
const Login = () => {
  const handelClick = () => {
    console.log("heay");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DP Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on DP Media.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handelClick}>
            <input placeholder="Email" type="email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
