import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-links">
          <p>About</p>
          <p>Store locator</p>
          <p>FAQs</p>
          <p>News</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <p className="by">
          Design by{" "}
          <Link to="https://www.linkedin.com/in/oguz-cinar1/">
            <span>Oguz Cinar</span>
          </Link>
        </p>
      </div>
    </footer>
  );
}
