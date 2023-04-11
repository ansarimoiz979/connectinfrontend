import { useRef, useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

export default function Register() {

  const Navigate = useNavigate();
  // const name = useRef()
  // const username = useRef();
  // const email = useRef();
  // const password = useRef();
  // const passwordAgain = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordAgain, setPasswordAgain] = useState("")

  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("password Does not match. Please enter matched password.")
    }
    else {
      const user = {
        name: name,
        username: userName,
        email: email,
        password: password,
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
            <input placeholder="name" className="loginInput" required value={name} onChange={(e) => { setName(e.target.value) }} />
            <input placeholder="Username" className="loginInput" required value={userName} onChange={(e) => { setUsername(e.target.value) }} />
            <input placeholder="Email" type="email" className="loginInput" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input placeholder="Password" type="password" className="loginInput" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <input placeholder="Password Again" type="password" className="loginInput" required value={passwordAgain} onChange={(e) => { setPassword(e.target.value) }} />
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
