import React, { useContext, useRef } from "react";
import { ItemsContext } from "../Context/Items";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Product() {
  const { items } = useContext(ItemsContext);
  const { id } = useParams();
  const product = items.find((e) => e.id === parseInt(id));
  return (
    <div className="product">
      <ProductCard product={product} />
    </div>
  );
}
