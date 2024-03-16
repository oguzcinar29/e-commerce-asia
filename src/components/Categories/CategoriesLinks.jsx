import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../Context/Items";
export default function CategoriesLinks() {
  const { changeHeader } = useContext(ItemsContext);
  const handleLinkClick = (temp) => () => {
    changeHeader(temp);
  };
  return (
    <div className="categories-btn">
      <Link onClick={handleLinkClick("All")} to="all">
        All
      </Link>
      <Link onClick={handleLinkClick("Furnitures")} to="furnitures">
        Furnitures
      </Link>
      <Link onClick={handleLinkClick("Electronics")} to="electronics">
        Electronics
      </Link>
      <Link onClick={handleLinkClick("Lamps")} to="lamps">
        Lamps
      </Link>
      <Link onClick={handleLinkClick("Kitchen")} to="kitchen">
        Kitchen
      </Link>
      <Link onClick={handleLinkClick("Chairs")} to="chairs">
        Chairs
      </Link>
      <Link onClick={handleLinkClick("Skin Care")} to="skin-care">
        Skin Care
      </Link>
    </div>
  );
}
