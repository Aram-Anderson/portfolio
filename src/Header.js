import React from 'react';
import logo from './img/aram-logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={logo} alt="logo " className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">aram anderson</span>
          <span className="heading-primary-sub">full stack software engineer</span>
        </h1>
        <button className="btn btn-white">About Me</button>
      </div>
    </div>
  )
}

export default Header;
