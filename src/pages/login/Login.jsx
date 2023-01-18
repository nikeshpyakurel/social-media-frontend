import React, { useRef, useContext } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);

  const handelClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
            <input
              placeholder="Email"
              required
              type="email"
              ref={email}
              className="loginInput"
            />
            <input
              type="password"
              required
              minLength="6"
              ref={password}
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <div>
                  Loading <CircularProgress color="white" size={16} />
                </div>
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <div>
                  Loading <CircularProgress color="white" size={16} />
                </div>
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
