import React from "react";
import "./WorkCard.css";
import { Button } from "./Button";
import view_project_icon from "../assets/images/icons/view-project-icon.png";
import github_icon from "../assets/images/icons/github-icon.png";

function WorkCard(props) {
  return (
    <div className="work-card-wrapper">
      <div className="work-card-image-wrapper">
        <img className="work-card-image" src={props.src} alt="work"></img>
      </div>
      <div className="work-card-body-wrapper">
        <div className="work-card-upper-section">
          <div className="work-card-headers">
            <h1 className="work-card-header">{props.header}</h1>
            <h2 className="work-card-role">{props.role}</h2>
          </div>
          <div className="work-card-year">{props.year}</div>
        </div>
        <div className="work-card-lower-section">
          <p className="work-card-description">{props.body}</p>
          <div className="work-card-buttons">
            {props.websiteURL && (
              <Button
                className="work-card-button"
                src={view_project_icon}
                size="small"
                url={props.websiteURL}
              >
                View Website
              </Button>
            )}
            {props.codeURL && (
              <Button
                className="work-card-button"
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
    </div>
  );
}

export default WorkCard;
