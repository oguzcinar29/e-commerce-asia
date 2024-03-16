import React, { useContext } from "react";
import { ItemsContext } from "../Context/Items";
import ItemCard from "../ItemCard";
export default function MakeSpecialType({ type1 }) {
  const { items } = useContext(ItemsContext);
  return (
    <div className="width-80">
      <div className="items">
        {items.map((item, index) => {
          if (item.category === type1) {
            return <ItemCard {...item} key={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
