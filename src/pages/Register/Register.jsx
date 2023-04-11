import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

export default function Register() {

  const Navigate = useNavigate();
  const name = useRef()
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("password Does not match. Please enter matched password.")
    }
    else {
      const user = {
        name: name.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("http://localhost:4000/v1/auth/register", user)
        Navigate("/login")
      } catch (error) {
        console.log(error, "hellooo");
      }
    };
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Connect-In</h3>
          <span className="loginDesc">
            Connect With Success.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="name" className="loginInput" required ref={name} />
            <input placeholder="Username" className="loginInput" required ref={username} />
            <input placeholder="Email" type="email" className="loginInput" required ref={email} />
            <input placeholder="Password" type="password" className="loginInput" required ref={password} />
            <input placeholder="Password Again" type="password" className="loginInput" required ref={passwordAgain} />
            <button className="loginButton" type="submit">Sign Up</button>
            <Link to="/login">
              <button className="loginRegisterButton">
                Log into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
