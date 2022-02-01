import React, { useState } from "react";
import "./LoginScreen.css";
import Signup from "./Signup";

function LoginScreen() {
  const [signin, setSignin] = useState(false);
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
          {signin ? (
            <Signup />
          ) : (
            <div >
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginInput">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="getstarted"
                    onClick={() => setSignin(true)}
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
