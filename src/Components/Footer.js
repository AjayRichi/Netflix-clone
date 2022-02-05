import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img
            className="image"
            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Nficon2016.png"
            alt="Netflix-logo"
            onClick={() => scrollToTop()}
          />
          <p className="footer-description">Netflix-clone app using React JS</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Varthur</span>Bangalore-560087
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>9743485576</p>
          </div>

          <div>
            <i className="fa fa-envelope" ></i>
            <p>
              <a href="mailto:ajayrichi111@gmail.com">ajayrichi111@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-about">Social Media</p>
          <div className="footer-icons">
            <a href="https://www.instagram.com/ajay_richi/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/aJayrichi/" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajay-m1997" target="_blank" rel="noreferrer" >
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/AjayRichi/Netflix-clone" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
