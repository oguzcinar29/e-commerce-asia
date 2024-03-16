import React, { useContext, useState } from "react";
import { ItemsContext } from "../Context/Items";
import ItemCard from "../ItemCard";
import GrayBoxCard from "./GrayBoxCard";
import FirstBox from "./FirstBox";
import CarouselBox from "./CarouselBox";
import ProudBox from "./ProudBox";
import Newsletter from "../Newsletter";
export default function Home() {
  return (
    <section className="home">
      <FirstBox />
      <ProudBox />
      <GrayBoxCard
        desc="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img="../img/banner/banner1.jpg"
        heading="Creative harmonious living"
        reverse={false}
      />
      <CarouselBox />
      <GrayBoxCard
        img="../img/banner/banner2.jpg"
        desc="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        heading="Comfortable & Elegante Living"
        reverse={true}
      />
    </section>
  );
}
