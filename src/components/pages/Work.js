import React from "react";
import WorkCard from "../WorkCard";
import "./Projects.css";
import datature_image from "../../assets/images/projects/datature.png";
import hacks_image from "../../assets/images/projects/hacks.png";
import credit_suisse_image from "../../assets/images/projects/Credit Suisse.png"
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
              src={credit_suisse_image}
              header="Credit Suisse"
              year="May 2023 - August 2023"
              role="Intern"
              body="Summer Analyst at the Technology (IT) Division."
              websiteURL="https://www.credit-suisse.com/sg/en.html"
            />
          </ul>
          <ul className="cards-row">
            <WorkCard
              src={datature_image}
              header="Datature"
              year="May 2022 - August 2022"
              role="Backend Engineer (Intern)"
              body="Worked on REST APIs using Express, TypeScript, and MongoDB."
              websiteURL="https://datature.io"
            />
          </ul>
          <ul className="cards-row">
            <WorkCard
              src={hacks_image}
              header="YNC_Hacks"
              year="Jan 2021 - July 2022"
              role="President"
              body="Implemented semester-long software and hardware workshops and projects. Organised the inaugural Yale-NUS Makerthon."
            />
          </ul>
        </LightSpeed>
      </div>

      <div className="cards-container-mobile">
        <LightSpeed left>
          <ul className="cards-row-mobile">
            <WorkCardMobile
              src={credit_suisse_image}
              header="Credit Suisse"
              year="May 2023 - August 2023"
              role="Intern"
              body="Summer Analyst at the Technology (IT) Division."
              websiteURL="https://www.credit-suisse.com/sg/en.html"
            />
          </ul>
          <ul className="cards-row-mobile">
            <WorkCardMobile
              src={datature_image}
              header="Datature"
              year="May 2022 - August 2022"
              role="Backend Engineer (Intern)"
              body="Worked on REST APIs using Express, TypeScript, and MongoDB."
              websiteURL="https://datature.io"
            />
          </ul>
          <ul className="cards-row-mobile">
            <WorkCardMobile
              src={hacks_image}
              header="YNC_Hacks"
              year="Jan 2021 - July 2022"
              role="President"
              body="Implemented semester-long software and hardware workshops and projects. Organised the inaugural Yale-NUS Makerthon."
            />
          </ul>
        </LightSpeed>
      </div>
    </div>
  );
}

export default Work;
