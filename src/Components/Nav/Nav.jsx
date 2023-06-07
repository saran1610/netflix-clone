import React, { useState } from "react";
import "./Nav.scss";
import logo from "../../assets/images/logo.png";
import Netflixavatar from "../../assets/images/Netflix-avatar.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setshow] = useState(false);
  const transition = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transition);
    return () => window.removeEventListener("scroll", transition);
  }, []);

  console.log(show);

  return (
    <div className={`nav ${show && "bg"}`}>
      <div className="nav-content d-flex justify-content-between">
        <Link to={"/"}>
        <img src={logo} alt="" className="logo d-block" />
        </Link>
        <nav className="header-nav">
          <a href="">Home</a>
          <a href="">TV Shows</a>
          <a href="">Movies</a>
          <a href="">New & Popular</a>
          <a href="">My list</a>
          <a href="">Browse by languages</a>
        </nav>
        <Link to={"/profile"}>
        <img src={Netflixavatar} alt="" className="avatar d-block" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
