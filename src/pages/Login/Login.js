import { useContext, useRef, useState } from "react";
import "./Login.css";
import { CircularProgress } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
export default function Login() {
  let [ email, setEmail ] = useState("")
  let [ password, setPassword ] = useState("")
  const  Navigate=  useNavigate()
  // const email = useRef();
  // const password = useRef();
  const { user,isFetching, dispatch ,error} = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    loginCall(
      { email: email, password: password },
      dispatch
    );
  //   const loginInfo={
  //     email : email,
  //     password:password,
  // };
  
  // try {
  //   let apires = await axios.post("http://localhost:4000/v1/auth/login",loginInfo)
  //   console.log("loginInfo", apires);
  //   Navigate("/home")
  // } catch (error) {
  //   console.log(error, "hellooo");
  // }
      
      

  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Connect-In</h3>
          <span className="loginDesc">let's connect to success</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              onChange={(e)=>{ setEmail(e.target.value) }}
            />
            <input
              placeholder="Password"
              type="password"
              required
              // minLength="4"
              className="loginInput"
              onChange={(e)=>{ setPassword(e.target.value)}}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/">
            <button className="loginRegisterButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
              Create a New Account
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
