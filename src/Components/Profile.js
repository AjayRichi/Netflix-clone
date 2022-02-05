import React from "react";
import "./Profile.css";
import { auth } from "../Firebase";
import { useSelector } from "react-redux";
import {  selectwishlist } from "./features/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  // const user = useSelector(selectUser);
  const wishlist = useSelector(selectwishlist);
  const navigate = useNavigate();
  const signout = () => {
    auth.signOut();
    navigate("/");
  };
  const handleBack = () => {
    window.history.back()
  };

  return (
    <div className="profileScreen">
      <i className="fa fa-arrow-left" onClick={handleBack}></i><span className="wishlist">Profile & Wishlist</span>
      <button className="signout" onClick={signout}>
          Sign Out
        </button>
      <div className="profileBody">
        <img
          className="logo-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User-logo"
        />
        <h2 className="welcome">Welcome to your Profile</h2>
      </div>
      <div className="wishlistPosters">
          {wishlist.map((movie) => {
            return movie.done === "Added" ? (
              ""
            ) : (
                <img key={movie.name} className="profilePoster" src={`${movie.image}`} alt={movie.name}/>
              );
          })}
        </div>
    </div>
  );
}

export default Profile;
