import React from "react";
import "./stacks.css";
import Native from "../../../assets/reactNative.png";

export default function HappyStack() {
  return (
    <div className="restaurant-stack-container">
      <div className="restaurant-stack-imgs">
        <img
          className="cloud-img top-img native"
          alt="react Native"
          src={Native} //"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604521004/Portfolio%20Pics/native_ty8w9r.jpg"
        ></img>

        <img
          className="cloud-img-happy"
          alt="html"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg"
        ></img>
        <img
          className="cloud-img-happy"
          alt="javascript"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png"
        ></img>
        <img
          className="cloud-img-happy"
          alt="css"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png"
        ></img>
        <img
          className="cloud-img-happy"
          alt="Ruby"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png"
        ></img>

        <img
          className="cloud-img-happy"
          alt="Node"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png"
        ></img>
      </div>
    </div>
  );
}
