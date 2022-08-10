import React from "react";
import WorkCard from "../WorkCard";
import "./Projects.css";
import ploont_image from "../../assets/images/projects/ploont.jpg";
import datature_image from "../../assets/images/projects/datature.png";
import hacks_image from "../../assets/images/projects/hacks.png";
import LightSpeed from "react-reveal/LightSpeed";
import WorkCardMobile from "../WorkCardMobile";

function Work() {
  return (
    <div className="projects-wrapper" id="work">
      <h1 className="projects-header">Work</h1>
      <div className="cards-container">
        <LightSpeed left>
          <ul className="cards-row">
            <WorkCard
              src={ploont_image}
              header="Ploont"
              year="May 2022 - Present"
              role="Co-founder"
              body="Lead the website, logistics, operations, and marketing development of the business."
              websiteURL="https://ploont.sg/"
            />
          </ul>
          <ul className="cards-row">
            <WorkCard
              src={datature_image}
              header="Datature"
              year="May 2022 - August 2022"
              role="Backend Engineer (Intern)"
              body="Implemented REST API routes using Express, Typescript, and MongoDB for new product features."
              websiteURL="https://datature.io"
            />
          </ul>
          <ul className="cards-row">
            <WorkCard
              src={hacks_image}
              header="YNC_Hacks"
              year="Jan 2021 - July 2022"
              role="President"
              body="Implemented semester-long software and hardware workshops and projects catering to different skill levels, increasing active membership by 200%."
            />
          </ul>
        </LightSpeed>
      </div>

      <div className="cards-container-mobile">
        <LightSpeed left>
          <ul className="cards-row-mobile">
            <WorkCardMobile
              src={ploont_image}
              header="Ploont"
              year="May 2022 - Present"
              role="Co-founder"
              body="Lead the website, logistics, operations, and marketing development of the business."
              websiteURL="https://ploont.sg/"
            />
          </ul>
          <ul className="cards-row-mobile">
            <WorkCardMobile
              src={datature_image}
              header="Datature"
              year="May 2022 - August 2022"
              role="Backend Engineer (Intern)"
              body="Implemented REST API routes using Express, Typescript, and MongoDB for new product features."
              websiteURL="https://datature.io"
            />
          </ul>
          <ul className="cards-row-mobile">
            <WorkCardMobile
              src={hacks_image}
              header="YNC_Hacks"
              year="Jan 2021 - July 2022"
              role="President"
              body="Implemented semester-long software and hardware workshops and projects catering to different skill levels, increasing active membership by 200%."
            />
          </ul>
        </LightSpeed>
      </div>
    </div>
  );
}

export default Work;
