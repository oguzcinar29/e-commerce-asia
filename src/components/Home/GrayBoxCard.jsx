import React from "react";
import { Link } from "react-router-dom";

export default function GrayBoxCard({ heading, desc, img, reverse }) {
  return (
    <div className="graybox-container">
      <div className={reverse ? "gray-box reverse-box" : "gray-box"}>
        <div className="text-area">
          <div className="texts">
            <h2>{heading}</h2>
            <p>{desc}</p>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="categories/all"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="gray-img">
          <img src={img} alt="s"></img>
        </div>
      </div>
    </div>
  );
}
