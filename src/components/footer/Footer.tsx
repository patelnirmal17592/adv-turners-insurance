import React from "react";
import style from "./Footer.module.sass";
import turnersLogo from "../../images/turnerLogo.png";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerWrapper}>
        <div className={style.logo}>
          <img src={turnersLogo} alt="turners logo"></img>
        </div>
        <div className={style.menu}>
          <div className={style.column1}>
            <h3>Vehicles</h3>
            <ul>
              <li>
                <a href="vehicles">How to Buy</a>
              </li>
              <li>
                <a href="auction">Finace & Insurance</a>
              </li>
              <li>
                <a href="finance">Vehicle Sale Price History Tool</a>
              </li>
              <li>
                <a href="car-insurance">Shipping Costs</a>
              </li>
              <li>
                <a href="contact-us">Motorcycles & Scooters</a>
              </li>
              <li>
                <a href="contact-us">Buses, Caravans & Motorhomes</a>
              </li>
            </ul>
          </div>

          <div className={style.column2}>
            <h3>Auction</h3>
            <ul>
              <li>
                <a href="vehicles">Auctions & Events</a>
              </li>
              <li>
                <a href="auction">Buy A Car</a>
              </li>
              <li>
                <a href="finance">Sell Your Car</a>
              </li>
              <li>
                <a href="car-insurance">Auction Schedule</a>
              </li>
              <li>
                <a href="contact-us">Buyer & Seller Fees</a>
              </li>
            </ul>
          </div>

          <div className={style.column3}>
            <h3>Finance</h3>
            <ul>
              <li>
                <a href="vehicles">Finance Homepage</a>
              </li>
              <li>
                <a href="auction">Car & Personal Finance</a>
              </li>
              <li>
                <a href="finance">Loan Calculator</a>
              </li>
              <li>
                <a href="car-insurance">Trucks Finance</a>
              </li>
              <li>
                <a href="contact-us">Financial Information</a>
              </li>
            </ul>
          </div>

          <div className={style.column4}>
            <h3>Car Insurance</h3>
            <ul>
              <li>
                <a href="vehicles">Car Insurance</a>
              </li>
              <li>
                <a href="auction">Mechanical Breakdown Insurance</a>
              </li>
              <li>
                <a href="finance">General Insurances</a>
              </li>
            </ul>
          </div>

          <div className={style.column5}>
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="vehicles">Overview</a>
              </li>
              <li>
                <a href="auction">Turners Careers</a>
              </li>
              <li>
                <a href="finance">Terms and Conditions</a>
              </li>
              <li>
                <a href="car-insurance">Privacy Policy</a>
              </li>
              <li>
                <a href="contact-us">The Good Oil Blog</a>
              </li>
            </ul>
          </div>

          <div className={style.column6}>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="vehicles">Turners Live</a>
              </li>
              <li>
                <a href="auction">Email Alerts</a>
              </li>
              <li>
                <a href="finance">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className={style.copywright}>
          <p>© 2021 Turners</p>
        </div>
        <div className={style.social}>
          <ul>
            <li>
              <a href="vehicles">
                <i className="fa-brands fa-instagram"></i>Social Media
              </a>
            </li>
            <li>
              <a href="auction">
                <i className="fa-brands fa-youtube"></i>Social Media
              </a>
            </li>
            <li>
              <a href="finance">
                <i className="fa-brands fa-facebook-f"></i>Social Media
              </a>
            </li>
            <li>
              <a href="finance">
                <i className="fa-solid fa-envelope"></i>Social Media
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
