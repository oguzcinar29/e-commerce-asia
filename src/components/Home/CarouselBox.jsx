import React, { useContext } from "react";
import { ItemsContext } from "../Context/Items";
import Carousel from "react-elastic-carousel";
import ItemCard from "../ItemCard";
export default function CarouselBox() {
  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 4 },
  ];
  const { items } = useContext(ItemsContext);
  return (
    <div className="carousel-container">
      <div className="items width-80 courusel1">
        <h1>Trending Now</h1>
        <Carousel breakPoints={breakPoints} enableAutoPlay>
          {items.map((item, index) => {
            return <ItemCard {...item} key={index} />;
          })}
        </Carousel>
      </div>
    </div>
  );
}
