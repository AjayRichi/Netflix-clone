import React, { useEffect, useRef, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Signup(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const mountedRef =useRef(true)
  const [signInFlag, setSignIn] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.email === null) {
      setSignIn(props.signin);
    } else {
      emailRef.current.value = props.email.value;
      setSignIn(props.signin);
    }
    return ()=>{
      mountedRef.current=false
    }
  }, [props.email, props.signin]);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    )
      .then(() => {
        dispatch(
          login({
            name: nameRef.current.value,
          })
        );
      })
      .catch((error) => {
        setError(error.message.slice(10, 97));
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        dispatch(
          login({
            name: nameRef.current.value,
          })
        );
      })
      .catch((error) => {
        setError(error.message.slice(10, 97));
      });
  };

  const handleSignin = () => {
    setSignIn(false);
    setError("");
  };
  const handleSignup = () => {
    setSignIn(true);
    setError("");
  };
  const handleChange=()=>{
    setError("")
  }

  return (
    <div className="signup_screen">
      {signInFlag ? (
        <form>
          <h1>Sign In</h1>
          {error ? <span>{error}</span> : ""}
          <input
            ref={emailRef}
            placeholder="Email Address"
            type="email"
            required
            onChange={()=>handleChange()}
          />
          <input
            ref={passwordRef}
            placeholder="Password"
            type="password"
            required
            onChange={()=>handleChange()}
          />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="signup-grey">New to Netflix? </span>
            <span
              className="signup_link"
              onClick={() => {
                handleSignin();
              }}
            >
              Sign Up now.
            </span>
          </h4>
        </form>
      ) : (
        <form>
          <h1>Sign Up</h1>
          {error ? <span>{error}</span> : ""}
          <input
            ref={emailRef}
            placeholder="Email Address"
            type="email"
            required
            onChange={()=>handleChange()}
          />
          <input
            ref={passwordRef}
            placeholder="Password"
            type="password"
            required
            onChange={()=>handleChange()}
          />
          <input ref={nameRef} placeholder="Name" type="name"  onChange={()=>handleChange()}/>
          <button type="submit" onClick={register}>
            Sign Up
          </button>
          <h4>
            <span className="signup-grey">Already Netflixed and Chilled? </span>
            <span
              className="signup_link"
              onClick={() => {
                handleSignup();
              }}
            >
              Sign In.
            </span>
          </h4>
        </form>
      )}
    </div>
  );
}

export default Signup;
