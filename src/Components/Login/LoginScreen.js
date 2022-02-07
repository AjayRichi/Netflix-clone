import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import Signup from "./Signup";

function LoginScreen() {
  const [signUp, setSignUp] = useState(false);
  const [signin, setSignin] = useState(false);

  const emailRef = useRef("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSignUp(true)
  }

  return (
    <div className="loginScreen">
      <div className="logicBackground">
        <img
          className="loginlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="Netflix-Background"
        ></img>
        <button className="signin" onClick={() => setSignin(true)}>
          Sign In
        </button>
        <div className="loginscreen_gradient"></div>
        <div className="loginbody">
          {signin ||signUp? (
            <Signup email={emailRef.current} signin={signin} />
          ) : (
            <div>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginInput">
                <form>
                  <input
                    type="email"
                    placeholder="Email Address"
                    ref={emailRef}
                  />
                  <button
                    type="submit"
                    className="getstarted"
                    onClick={(e) => handleSubmit(e)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
