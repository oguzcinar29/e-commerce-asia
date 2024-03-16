import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CategoriesLinks from "./CategoriesLinks";
import { ItemsContext } from "../Context/Items";

export default function Categories() {
  const { header } = useContext(ItemsContext);
  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-box">
          <Link className="home-link" to="/">
            <KeyboardArrowLeftIcon /> Home
          </Link>
          <h2>{header}</h2>
        </div>
        <CategoriesLinks />
      </div>
      <Outlet />
    </section>
  );
}
