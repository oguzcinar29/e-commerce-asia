import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Categories from "./Categories/Categories";
import Product from "./Product/Product";
import All from "./Categories/All";
import Furnitures from "./Categories/Furnitures";
import Electronics from "./Categories/Electronics";
import Lamps from "./Categories/Lamps";
import Kitchen from "./Categories/Kitchen";
import Chairs from "./Categories/Chairs";
import SkinCare from "./Categories/SkinCare";
import { useState } from "react";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
export default function App() {
  const [isGroceryClicked, setIsGroceryClicked] = useState(false);

  const updateIsGroceryClicked = (value) => {
    setIsGroceryClicked(value);
  };
  return (
    <div
      className={
        isGroceryClicked ? "opacity-container big-container" : "big-container"
      }
    >
      <Navbar onGroceryClicked={updateIsGroceryClicked} />
      <div
        className={isGroceryClicked ? "container upper-container" : "container"}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />}>
            <Route path="all" element={<All />} />
            <Route path="furnitures" element={<Furnitures />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="lamps" element={<Lamps />} />
            <Route path="kitchen" element={<Kitchen />} />
            <Route path="chairs" element={<Chairs />} />
            <Route path="skin-care" element={<SkinCare />} />
          </Route>
          <Route path="categories/product" element={<Product />}>
            <Route path=":id" element={<Product />} />
          </Route>
        </Routes>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
