import React from "react";

const Product = ({ Title, Price, Image, Discription,imageSrc }) => {
  return (
    <>
      <h4>Title :- {Title}</h4>
      <h4>Price :-{Price}</h4>
      <h4>Image :-{Image}</h4>
      <h4>Discription :-{Discription}</h4>
      <img src={imageSrc} alt="" />
    </>
  );
};

export default Product;
