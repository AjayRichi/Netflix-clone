import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import {memo} from 'react'


function Nav() {
  const [show, handleShow] = useState(false);
  const [logo, handleLogo] = useState("logo");
  const navigate = useNavigate();
  const mountedRef = useRef(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const Play = () => {
    new Audio("./Netflix-Intro-Sound.mp3").play();
    handleLogo("logo-animation");
    setTimeout(changeHandle, 3000);
  };

  const changeHandle = () => {
    handleLogo("logo");
  };

  const avatarHandle = () => {
    navigate("/profile");
  };

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        id="play"
        className={logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix-logo"
        onClick={() => Play()}
      />
      <form className="searchContainer">
        <i className="fas fa-search" onClick={() => handleSearch()}></i>
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          name="search"
          onClick={() => handleSearch()}
        />
      </form>
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User-logo"
        onClick={() => avatarHandle()}
      />
    </div>
  );
}
export default memo(Nav);
