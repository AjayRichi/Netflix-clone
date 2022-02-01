import React from "react";
import Nav from "./Nav";
import "./Profile.css";
import { auth } from "../Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const signout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileBody">
        <h2>
          Welcome to your Profile
          <br/>
          <span>{user.email}</span>
        </h2>
        <button className="signout" onClick={signout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
