import React from "react";
import "./Home.css";
import { Button } from "../Button";
import avatar from "../../assets/images/aadi.jpeg";
import mail_icon from "../../assets/images/icons/mail-icon.png";
import Zoom from "react-reveal/Zoom";
import catsofsg_image from "../../assets/images/projects/catsofsg.png";

function Home() {
  return (
    <div className="home-wrapper" id="home">
      <div className="home-image-wrapper">
        <img src={avatar} className="home-image" alt="avatar"></img>
        <Zoom>
          <div className="home-headers-wrapper-mobile">
            <h1 className="home-header-mobile">hello!</h1>
            <h1 className="home-header-mobile">i'm aadi.</h1>
          </div>
        </Zoom>
      </div>
      <div className="home-texts">
        <Zoom>
          <div className="home-headers-wrapper">
            <h1 className="home-header">hello!</h1>
            <h1 className="home-header">i'm aadi.</h1>
          </div>
        </Zoom>
        <p className="home-text">
          I am a senior at Yale-NUS College, where I am majoring in
          Mathematical, Computational, and Statistical Sciences.
        </p>
        <div className="home-buttons">
          <Button
            className="home-button"
            src={mail_icon}
            size="large"
            url="mailto:aadipatwari@gmail.com"
          >
            Email
          </Button>
          <Button
            className="home-button"
            src={catsofsg_image}
            size="large"
            url="https://catsofsg.com"
          >
            Latest Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
