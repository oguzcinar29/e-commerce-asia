import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ItemsContext } from "../Context/Items";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ShopCard({ id, img, count, desc, price }) {
  const { deleteItem, increaseNum, decraseNum, num2, newArr } =
    useContext(ItemsContext);
  return (
    <div className="shoping-cart">
      <div className="top-box">
        <div className="top-img">
          <img style={{ objectFit: "cover" }} src={img} alt={desc}></img>
        </div>
        <div className="top-info">
          <p>{desc}</p>
          <div className="little-box">
            <button onClick={() => decraseNum(id)}>
              <RemoveIcon />
            </button>
            <p>{newArr[id - 1].count}</p>
            <button onClick={() => increaseNum(id)}>
              <AddIcon />
            </button>
          </div>
        </div>
        <div className="price-area">
          <p>{(price * newArr[id - 1].count).toFixed(2)}$</p>
          <button onClick={() => deleteItem(id)}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
