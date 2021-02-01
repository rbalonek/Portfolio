import React from "react";
import "./RestaurantApp.css";
import RestaurantStack from "../Stacks/RestaurantStack";

//effects
import { Fade, Zoom } from "react-awesome-reveal";
import ProjectHeader from "../../Header/ProjectHeader/ProjectHeader";
import Stack from "../Stacks/Stack";

export default function RestaurantApp() {
  return (
    <div style={{ minHeight: "100vh" }} id="restaurant-app">
      <ProjectHeader
        navUp={"trinity"}
        navDown={"about"}
        github={"https://github.com/rbalonek/Restaurant-App"}
        title={"Restaurant App"}
        website={"https://balonek-restaurant-app.netlify.app/LiveMenu"}
      />

      <div className="restaurant-container">
        <Zoom>
          <img
            className="img-restarant-app"
            id="left-restaurant-app"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598127072/Portfolio%20Pics/CellPhonePreview1_stuvob.png"
            alt=""
          />
        </Zoom>
        <div className="text-restaurant-app">
          <Fade cascade>
            <p className="p-restaurant-app">
              My Restaurant-App was created to provide restaurants assistance in
              complying with a socially distanced guest experience.
            </p>
            <p className="p-restaurant-app">
              {" "}
              The app is designed so a guest will be able to scan the QR code on
              the table and view / order from the menu without needing to call
              over the server.{" "}
            </p>
            <p className="p-restaurant-app">
              The admin of the restaurant-app is able to log into their
              password-protected back-end to Create, Edit, and delete menu
              items. The edits will reflect the "Main Menu" screen so the guests
              will be able to add menu items to their bill.
            </p>
          </Fade>
        </div>
        <Zoom>
          <img
            className="img-restarant-app"
            id="right-restaurant-app"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598127073/Portfolio%20Pics/CellPhonePreview2_ot50f8.png"
            alt=""
          />
        </Zoom>
      </div>
      <div className="smallImg-holder">
        <img
          alt="smallRest"
          className="smaller-restaurant-img"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598126009/Portfolio%20Pics/RestaurantAppPreview_erljtv.png"
        ></img>
      </div>
      <div className="stack-holder">
        <Stack
          images={[
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/react-original-wordmark.fadd9c95_fhawii.svg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514327/Portfolio%20Pics/Netlify-Logo_amivge.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
          ]}
        />
      </div>
    </div>
  );
}
