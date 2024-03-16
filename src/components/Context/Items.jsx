import React, { createContext, useState } from "react";
import { items } from "../../data";

const setNewArr = () => {
  let newItems = [];
  for (let i = 0; i < items.length; i++) {
    let item = {
      id: i + 1,
      count: 0,
      img: items[i].img,
      desc: items[i].description,
      price: items[i].price,
    };
    newItems.push(item);
  }
  return newItems;
};

export const ItemsContext = createContext(null);

function ItemsProvider({ children }) {
  const [newArr, setNewArr1] = useState(setNewArr());
  const [newArr2, setNewArr2] = useState([]);
  const [header, setHeader] = useState("All");
  const [isClickedAddCart, setClickedAddCart] = useState(false);
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState(1);
  const [id, setId] = useState(1);
  const [tempImg, setTempImg] = useState("");
  const changeImage = (itemId) => {
    setTempImg(() => items[itemId - 1].img);
  };
  const changeImage2 = (itemId, num) => {
    setTempImg(() => items[itemId - 1].otherImgs[num]);
  };
  const increaseNum = (itemId) => {
    setNewArr1((prevArr) => {
      return prevArr.map((item, index) => {
        if (index === itemId - 1) {
          return { ...item, count: item.count + 1 };
        }
        return { ...item };
      });
    });
  };
  const decraseNum = (itemId) => {
    setNewArr1((prevArr) => {
      return prevArr.map((item, index) => {
        console.log(itemId);
        if (index === itemId - 1) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
        }
        return { ...item };
      });
    });
    console.log(arr);
    console.log(newArr);
  };
  const changeClickedAdd = () => {
    setClickedAddCart(true);
  };
  const changeHeader = (temp) => {
    setHeader(() => temp);
  };

  const addCart = (itemId) => {
    setNewArr1((prevArr) => {
      return prevArr.map((item, index) => {
        if (itemId - 1 === index) {
          return { ...item, count: 1 };
        }
        return { ...item };
      });
    });

    setArr((prevArr) => {
      if (!prevArr.some((item) => item.id === itemId)) {
        return [...prevArr, newArr[itemId - 1]];
      }
      return [...prevArr];
    });
  };
  const deleteItem = (itemId) => {
    setArr((prevArr) => {
      return prevArr.filter((item) => {
        return item.id !== itemId;
      });
    });
    setNewArr1((prevArr) => {
      return prevArr.map((item, index) => {
        if (index === itemId - 1) {
          return { ...item, count: 0 };
        }
        return { ...item };
      });
    });
  };
  const calcTotal = () => {
    let total = 0;
    newArr.map((item) => {
      total += item.count * item.price;
    });
    return total;
  };

  const itemsValues = {
    items,
    changeHeader,
    header,
    isClickedAddCart,
    addCart,
    changeClickedAdd,
    arr,
    increaseNum,
    decraseNum,
    num,
    calcTotal,
    deleteItem,
    newArr,
    changeImage,
    changeImage2,
    tempImg,
  };
  return (
    <ItemsContext.Provider value={itemsValues}>
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;
