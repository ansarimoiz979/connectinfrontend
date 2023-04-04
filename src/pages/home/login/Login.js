import { useContext, useRef } from "react";
import "./Login.css";
import { CircularProgress } from "@material-ui/core";
import { Person } from "@material-ui/icons";

export default function Login() {
  const email = useRef();
  const password = useRef();
//   const { user,isFetching, dispatch ,error} = useContext(AuthContext);

//   const handleClick = (e) => {
//     e.preventDefault();
//     loginCall(
//       { email: email.current.value, password: password.current.value },
//       dispatch
//     );

//   };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Connect-In</h3>
          <span className="loginDesc">let's connect to success</span>
        </div>
        <div className="loginRight">
          {/* <form className="loginBox" onSubmit={handleClick}>
           */}
                     <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
                
              ) : (
                "Log In"
              )} */}
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )} */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
