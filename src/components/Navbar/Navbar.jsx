import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "../useWindowDimensions";
import { ItemsContext } from "../Context/Items";
import ShopCard from "./ShopCard";

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar({ onGroceryClicked }) {
  const [isMenuClicked, setMenuClicked] = useState(false);
  const [isGroceryClicked, setGroceryClicked] = useState(false);
  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(true);
  const { isClickedAddCart, arr, calcTotal, changeImage } =
    useContext(ItemsContext);
  const controlNavbar = () => {
    if (window.scrollY > 70) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  window.addEventListener("scroll", controlNavbar);
  const { changeHeader } = useContext(ItemsContext);
  const handleLinkClick = (temp) => () => {
    changeHeader(temp);
  };
  return (
    <>
      {!isMenuClicked && (
        <nav className="nav">
          <div
            className={!show ? "scrool1 nav-box width-80" : "nav-box width-80"}
          >
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/"
            >
              <img className="logo" src="../img/newlogo2.png" alt="logo" />
            </Link>
            <div className="nav-links">
              <Link
                onClick={() => {
                  handleLinkClick("All");
                  window.scrollTo(0, 0);
                }}
                to="/categories/all"
              >
                CATEGORIES
              </Link>
              <Link onClick={() => changeImage(19)} to="/categories/product/19">
                PRODUCT PAGE
              </Link>

              <IconButton
                onClick={() => {
                  onGroceryClicked(!isGroceryClicked);
                  setGroceryClicked((prevVal) => !prevVal);
                }}
                aria-label="cart"
              >
                <ShoppingCartIcon />
                <span>({arr.length})</span>
              </IconButton>
              {width < 600 && (
                <button onClick={() => setMenuClicked((prevVal) => !prevVal)}>
                  <MenuIcon />
                </button>
              )}
            </div>
          </div>
        </nav>
      )}
      {isMenuClicked && (
        <div className="menu">
          <button
            className="menu-btn"
            onClick={() => setMenuClicked((prevVal) => !prevVal)}
          >
            <CloseIcon />
          </button>
          <div className="nav-links menu-nav-links">
            <Link to="categories">CATEGORIES</Link>
            <Link to="/categories/lamps">LAMPS</Link>
            <Link to="/categories/product/19">PRODUCT PAGE</Link>
          </div>
        </div>
      )}
      {isGroceryClicked && (
        <div className="grocery">
          <div
            className={isGroceryClicked ? "grocery-box opac" : "grocery-box"}
          >
            <div className="grocery-top">
              <h3>Your Shopping Cart ({arr.length})</h3>
              <button
                onClick={() => {
                  onGroceryClicked(!isGroceryClicked);
                  setGroceryClicked((prevVal) => !prevVal);
                }}
              >
                <CloseIcon />
              </button>
            </div>
            {arr.length !== 0 && (
              <div className="shoping-container">
                {arr.map((item, index) => {
                  return <ShopCard {...item} key={index} />;
                })}
              </div>
            )}
            {arr.length !== 0 && (
              <div className="bottom-box">
                <hr></hr>
                <h2>Subtotal</h2>
                <div className="deep-bot">
                  <p>${calcTotal().toFixed(2)}</p>
                  <button>Go to Checkout</button>
                </div>
              </div>
            )}
            {arr.length === 0 && (
              <div className="grocery-mid">
                <img
                  className="empty-img"
                  src="../img/cart/empty-cart.png"
                  alt="garbage img"
                />
                <h4>Your Cart is Empty</h4>
                <button
                  onClick={() => {
                    onGroceryClicked(!isGroceryClicked);
                    setGroceryClicked((prevVal) => !prevVal);
                  }}
                >
                  Keep Browsing
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
