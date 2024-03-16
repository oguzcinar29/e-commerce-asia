import React, { useContext, useEffect } from "react";
import CarouselBox from "../Home/CarouselBox";
import { ItemsContext } from "../Context/Items";
export default function ProductCard(props) {
  const { product } = props;

  const { tempImg, changeImage, changeImage2, changeClickedAdd, addCart } =
    useContext(ItemsContext);
  useEffect(() => {
    changeImage(product.id);
  }, []);
  return (
    <div className="product-card">
      <div className="product-box">
        <h1>{product.description}</h1>
        <div className="product-informations">
          <div className="product-img">
            <img
              className="product-big-img"
              alt={product.description}
              src={tempImg}
            ></img>
            <div className="product-small-imgs">
              <img
                onMouseOver={() => changeImage(product.id)}
                src={product.img}
                alt={product.description}
              ></img>
              <img
                onMouseOver={() => changeImage2(product.id, 0)}
                src={product.otherImgs[0]}
                alt={product.description}
              ></img>
              <img
                onMouseOver={() => changeImage2(product.id, 1)}
                src={product.otherImgs[1]}
                alt={product.description}
              ></img>
            </div>
          </div>
          <div className="product-info-box">
            <div className="product-info">
              <p>{product.specs}</p>
              <div className="quantity">
                <h3>{product.price.toFixed(2)}$</h3>
              </div>
              <div className="add-card">
                <button
                  onClick={() => {
                    changeClickedAdd();
                    addCart(product.id);
                  }}
                  className="first-btn"
                >
                  ADD TO CART
                </button>
                <button className="second-btn">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-gray-boxs">
          <div className="product-gray-box">
            <h2>Texture:</h2>
            <p>{product.texture}</p>
          </div>
          <div className="product-gray-box">
            <h2>Weight:</h2>
            <p>{product.weight}</p>
          </div>
          <div className="product-gray-box">
            <h2>Size:</h2>
            <p>{product.size}</p>
          </div>
        </div>
        <CarouselBox />
      </div>
    </div>
  );
}
