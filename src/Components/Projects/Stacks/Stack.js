import React from "react";
import "./stacks.css";
import Native from "../../../assets/reactNative.png";

export default function Stack(props) {
  const imgArray = props.images;

  console.log(imgArray);
  return (
    <div className="restaurant-stack-container">
      <div className="restaurant-stack-imgs">
        {imgArray.map((img) => (
          <img src={img} alt={img} className="cloud-img-footer" />
        ))}
      </div>
    </div>
  );
}
