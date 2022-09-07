import React from "react";
import style from "./Header.module.css";
import turnersLogo from "../../images/turnerLogo.png";

const header = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarWrapper}>
        <div className={style.logo}>
          <img src={turnersLogo} alt="turners logo"></img>
        </div>
        <div className={style.menu}>
          <ul>
            <li>
              <a href="vehicles">
                Vehicles<i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li>
              <a href="auction">
                Auction<i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li>
              <a href="finance">Finance</a>
            </li>
            <li>
              <a href="car-insurance">Car insurance</a>
            </li>
            <li>
              <a href="contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={style.contact}>
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-solid fa-phone"></i>
        </div>
      </div>
    </div>
  );
};

export default header;
