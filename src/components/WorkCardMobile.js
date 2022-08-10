import React from "react";
import "./WorkCardMobile.css";
import { Button } from "./Button";
import view_project_icon from "../assets/images/icons/view-project-icon.png";
import github_icon from "../assets/images/icons/github-icon.png";

function WorkCardMobile(props) {
  return (
    <div className="work-card-mobile-wrapper">
      <div className="work-card-mobile-upper-section">
        <div className="work-card-mobile-image-wrapper">
          <img
            className="work-card-mobile-image"
            src={props.src}
            alt="work"
          ></img>
        </div>
        <div className="work-card-mobile-headers">
          <h1 className="work-card-mobile-header">{props.header}</h1>
          <h2 className="work-card-mobile-role">{props.role}</h2>
          <div className="work-card-mobile-year">{props.year}</div>
        </div>
      </div>
      <div className="work-card-mobile-lower-section">
        <p className="work-card-mobile-description">{props.body}</p>
        <div className="work-card-mobile-buttons">
          {props.websiteURL && (
            <Button
              className="work-card-mobile-button"
              src={view_project_icon}
              size="small"
              url={props.websiteURL}
            >
              View Website
            </Button>
          )}
          {props.codeURL && (
            <Button
              className="work-card-mobile-button"
              src={github_icon}
              size="small"
              url={props.codeURL}
            >
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkCardMobile;
