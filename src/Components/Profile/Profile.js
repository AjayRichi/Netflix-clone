import React from "react";
import "./Profile.css";
import { auth } from "../../Firebase";
import { useSelector } from "react-redux";
import { selectUser, selectwishlist } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const user = useSelector(selectUser);
  const wishlist = useSelector(selectwishlist);
  const navigate = useNavigate();
  const signout = () => {
    auth.signOut();
    navigate("/");
  };
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="profileScreen">
      <div className="back">
        <i className="fa fa-arrow-left" onClick={handleBack}></i>
        <span className="wishlist">Profile & Wishlist</span>
      </div>
      <button className="signout" onClick={signout}>
        Sign Out
      </button>
      <div className="profileBody">
        <img
          className="logo-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User-logo"
        />
        <h2 className="welcome">{user.email}</h2>
      </div>
      {wishlist.length !== 0 ? (
        <div className="wishlistPosters">
          {wishlist.map((movie) => {
            return movie.done === "Added" ? (
              ""
            ) : (
              <img
                className="profilePoster"
                src={`${movie.image}`}
                alt={movie.movie}
                key={movie.movie}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <h3 style={{ color: "red" }}>Your wishlist is Empty....</h3>
          <img
            width={300}
            src="https://cdn.theatlantic.com/thumbor/7R5_ts2fcnmtxu7Cx6QzLRZtcn0=/860x0:4469x3609/1080x1080/media/img/mt/2021/04/GettyImages_1230547145/original.jpg"
            alt="Wishlist is Empty"
          />
        </div>
      )}
    </div>
  );
}

export default Profile;
