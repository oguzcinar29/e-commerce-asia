import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "./Context/Items";

export default function ItemCard({ category, img, description, price, id }) {
  const { changeImage } = useContext(ItemsContext);
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
        changeImage(id);
      }}
      to={`/categories/product/${id}`}
      className="card carousel"
    >
      <img src={img} alt={category}></img>
      <p>{description}</p>
      <p>
        <b>{price}$</b>
      </p>
    </Link>
  );
}
