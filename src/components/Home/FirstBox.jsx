import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../Context/Items";

export default function FirstBox() {
  const { changeHeader } = useContext(ItemsContext);
  const handleLinkClick = (temp) => () => {
    changeHeader(temp);
  };
  return (
    <div className="first-box">
      <div className="images">
        <Link
          onClick={handleLinkClick("Furnitures")}
          className="first-img home-img"
          to="categories/furnitures"
        >
          <img src="./img/header/home-img-1.jpg" alt="s"></img>
          <h2>Live Comfortably</h2>
        </Link>
        <Link
          onClick={handleLinkClick("Skin Care")}
          className="second-img home-img"
          to="categories/skin-care"
        >
          <img src="./img/header/home-img-2.jpg" alt="s"></img>
          <h2>Skincare</h2>
        </Link>
        <div className="small">
          <Link
            onClick={handleLinkClick("Kitchen")}
            className="third-img home-img"
            to="categories/kitchen"
          >
            <img src="./img/header/home-img-3.jpg" alt="s"></img>
            <h2>Kitchen</h2>
          </Link>
          <Link
            onClick={handleLinkClick("Electronics")}
            className="fourth-img home-img"
            to="categories/electronics"
          >
            <img src="./img/header/home-img-4.jpg" alt="s"></img>
            <h2>Electronics</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
