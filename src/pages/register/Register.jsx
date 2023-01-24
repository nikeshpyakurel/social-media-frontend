import React from "react";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value === password.current.value) {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history("/login");
      } catch (err) {
        email.current.setCustomValidity("Email Is Already Registered");
      }
    } else {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    }
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              type="email"
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              minLength="6"
              type="password"
              ref={password}
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              required
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
