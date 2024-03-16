import React, { useContext } from "react";
import { ItemsContext } from "../Context/Items";
import ItemCard from "../ItemCard";
export default function ProudBox() {
  const { items } = useContext(ItemsContext);
  return (
    <div className="proud-container">
      <div className="proud-box">
        <h2>Product we are proud of</h2>
        <div className="items">
          {items.map((item, index) => {
            if (index < 8) {
              return <ItemCard {...item} key={index} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
