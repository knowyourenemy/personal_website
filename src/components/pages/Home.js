import React from "react";
import "./Home.css";
import { Button } from "../Button";
import avatar from "../../assets/images/aadi.jpeg";
import mail_icon from "../../assets/images/icons/mail-icon.png";
import resume_icon from "../../assets/images/icons/resume-icon.png";
import resume from "../../assets/documents/Aaditya-Resume-020922.pdf";
import Zoom from "react-reveal/Zoom";

function Home() {
  const ploont = (
    <a
      href="https://ploont.sg"
      className="ync-hacks-link"
      target="_blank"
      rel="noreferrer"
    >
      Ploont
    </a>
  );

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
          I am currently pursuing a B.Sc. degree at Yale-NUS College. I am also
          the co-founder of {ploont}, an online aroid boutique in Singapore.
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
            src={resume_icon}
            size="large"
            url={resume}
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
