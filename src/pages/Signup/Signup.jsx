import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaLock, FaEnvelope } from 'react-icons/fa';
import './css/style.css';

const Signup = () => {
  const [showSingup, setShowSingup] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const form = document.getElementById("form");
    const singupContent = document.querySelectorAll(".singup")[0];
    const loginContent = document.querySelectorAll(".Login")[0];
    const singBtn = document.getElementById("singup-btn");
    const loginBtn = document.getElementById("login-btn");
    const checkIcon = document.querySelector("#check-icon");

    if (showSingup) {
      form.classList.add("rotate-sign");
      form.classList.remove("rotate-login");
      singupContent.style.display = "block";
      loginContent.style.display = "none";
      singBtn.classList.add("active");
      loginBtn.classList.remove("active");
    } else {
      form.classList.add("rotate-login");
      form.classList.remove("rotate-sign");
      loginContent.style.display = "block";
      singupContent.style.display = "none";
      loginBtn.classList.add("active");
      singBtn.classList.remove("active");
    }

    if (checked) {
      checkIcon.style.display = "inline-block";
      setTimeout(() => {
        checkIcon.style.display = "none";
      }, 1000);
    }
  }, [showSingup, showLogin, checked]);

  const handleSingupClick = () => {
    setShowSingup(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowSingup(false);
    setShowLogin(true);
  };

  const handleChecked = () => {
    setChecked(true);
  };
const hundleSubmit = ()=>{
  setChecked(true);
};
  return (
    <div className='signup'>
      <div className="overlay"></div>
      <button className='back-home'>
        <Link to="/" className='back-link'>Home</Link>
      </button>
      <div className="container">
        <FaCheckCircle id='check-icon' />
        <form className="form" id="form">
          <div className="content">
            <div className="btns">
              <button id="singup-btn" onClick={handleSingupClick} className={showSingup ? "active" : ""}>
                Sing up
              </button>
              <button id="login-btn" onClick={handleLoginClick} className={showLogin ? "active" : ""}>
                Log in
              </button>
            </div>
            <div className="singup" style={{ display: showSingup ? "block" : "none" }}>
              <p className="title">Sing up for free !</p>
              <input type="text" id="first-name" placeholder="First name" required />
              <input type="text" id="last-name" placeholder="Last name" required />
              <span className="sign-email">
                <input type="email" id="email" placeholder="Your Email" required />
                <FaEnvelope className='icon' />
              </span>

              <span className="sign-pass">
                <input type="password" id="password" placeholder="Set password" required />
                <FaLock className='icon' />
              </span>
              <button onClick={hundleSubmit} className="submit" type="reset">
                Get Started
              </button>
            </div>

            <div className="Login" style={{ display: showLogin ? "block" : "none" }}>
              <p className="title">get into to your account !</p>
              <span className="login-email">
                <input type="email" id="email" placeholder="Your Email" required />
                <FaEnvelope className='icon' />
              </span>
              <span className="login-pass">
                <input type="password" id="password" placeholder="Your Password" required />
                <FaLock className='icon' />
              </span>
              <button onClick={hundleSubmit} className="submit" type="reset">
                Continue
              </button>
              <p className="forget">
                <a href="#">forget password ?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;