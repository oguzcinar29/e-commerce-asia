import React, { useContext } from "react";
import { ItemsContext } from "../Context/Items";
import ItemCard from "../ItemCard";

export default function All() {
  const { items } = useContext(ItemsContext);
  return (
    <div className="width-80">
      <div className="items">
        {items.map((item, index) => {
          return <ItemCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
