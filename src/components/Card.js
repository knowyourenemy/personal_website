import React from "react";
import "./Card.css";
import { Button } from "./Button";
import view_project_icon from "../assets/images/icons/view-project-icon.png";
import github_icon from "../assets/images/icons/github-icon.png";

function Card(props) {
  const badgeArray = props.badges;
  const badgeItems = badgeArray.map((badgeURL) => {
    return (
      <img
        className="card-badge"
        src={badgeURL}
        key={badgeURL}
        alt="badge"
      ></img>
    );
  });

  return (
    <div className="card-wrapper">
      <div className="card-image-wrapper">
        <img className="card-image" src={props.src} alt="project"></img>
      </div>
      <div className="card-body-wrapper">
        <div className="card-upper-section">
          <div className="card-headers">
            <h1 className="card-header">{props.header}</h1>
            <h2 className="card-year">{props.year}</h2>
          </div>
          <div className="card-badges">{badgeItems}</div>
        </div>
        <div className="card-lower-section">
          <p className="card-description">{props.body}</p>
          <div className="card-buttons">
            {props.projectURL && (
              <Button
                className="card-button"
                src={view_project_icon}
                size="small"
                url={props.projectURL}
              >
                View Project
              </Button>
            )}
            {props.codeURL && (
              <Button
                className="card-button"
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

export default Card;
