import React from "react";
import Card from "../Card";
import "./Projects.css";
import react_icon from "../../assets/images/icons/reactjs-icon.svg";
import html5_icon from "../../assets/images/icons/html5-icon.svg";
import css3_icon from "../../assets/images/icons/css3-icon.svg";
import docker_icon from "../../assets/images/icons/docker-icon.png";
import google_maps_icon from "../../assets/images/icons/google-maps-icon.svg";
import google_cloud_icon from "../../assets/images/icons/google-cloud-icon.png";
import python_icon from "../../assets/images/icons/python-icon.svg";
import telegram_icon from "../../assets/images/icons/telegram-icon.svg";
import java_icon from "../../assets/images/icons/java-icon.svg";
import libgdx_icon from "../../assets/images/icons/libgdx-icon.png";
import unity_icon from "../../assets/images/icons/unity-icon.png";
import csharp_icon from "../../assets/images/icons/csharp-icon.svg";
import processing_icon from "../../assets/images/icons/processing-icon.jpeg";
import javascript_icon from "../../assets/images/icons/javascript-icon.png";
import aws_icon from "../../assets/images/icons/aws-icon.png";
import django_icon from "../../assets/images/icons/django-icon.jpg";
import express_icon from "../../assets/images/icons/express-icon.png";
import mongo_icon from "../../assets/images/icons/mongodb-icon.png";
import squarespace_icon from "../../assets/images/icons/squarespace-icon.png";
import instagram_icon from "../../assets/images/icons/instagram-icon.png";
import tailwind_icon from "../../assets/images/icons/tailwind-icon.png";
import typescript_icon from "../../assets/images/icons/typescript.png";
import ballistics_image from "../../assets/images/projects/ballistics.png";
import escape_earth_image from "../../assets/images/projects/escape-earth.png";
import sentry_image from "../../assets/images/projects/sentry.png";
import street_view_image from "../../assets/images/projects/street-view.png";
import jelakbot_image from "../../assets/images/projects/jelakbot.png";
import personal_website_v1_image from "../../assets/images/projects/personal-website.png";
import ask_a_dog_image from "../../assets/images/projects/ask-a-dog.png";
import studio_log_image from "../../assets/images/projects/studio-log.png";
import saving_ync_image from "../../assets/images/projects/saving-ync.svg";
import catsofsg_image from "../../assets/images/projects/catsofsg.png";
import LightSpeed from "react-reveal/LightSpeed";
import ploont_image from "../../assets/images/projects/ploont.jpg";

import CardMobile from "../CardMobile";

function Projects() {
  return (
    <div className="projects-wrapper" id="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="cards-container">
        <LightSpeed left>
          <ul className="cards-row">
            <Card
              src={catsofsg_image}
              header="Cats of SG"
              year="2023"
              body="A website advocating for community cats in Singapore."
              projectURL="https://catsofsg.com/"
              // codeURL="https://github.com/knowyourenemy/catsofsg-frontend"
              badges={[
                react_icon,
                typescript_icon,
                express_icon,
                mongo_icon,
                google_cloud_icon,
                docker_icon,
              ]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={ploont_image}
              header="Ploont"
              year="2022"
              body="An online plant shop specialising in aroids. Closed down in December 2022"
              projectURL="https://www.instagram.com/ploontsg/"
              badges={[squarespace_icon, instagram_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={saving_ync_image}
              header="Saving Yale-NUS"
              year="2021"
              body="A website for students of Yale-NUS College to document their grief over the sudden and unjustified closure of the college."
              projectURL="https://savingyalenus.com/"
              badges={[html5_icon, tailwind_icon, typescript_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={studio_log_image}
              header="Studio Log"
              year="2021"
              body="A website that allows musicians to keep track of the hours they spend on their instruments. Developed using Django during my summer break in 2021."
              // projectURL="https://studiolog.herokuapp.com"
              codeURL="https://github.com/knowyourenemy/studiolog"
              badges={[django_icon, python_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={ask_a_dog_image}
              header="Ask a Dog"
              year="2021"
              body="A website that answers questions with a picture of a dog and a famous quote. Developed using React.js during my summer break in 2021."
              projectURL="https://knowyourenemy.github.io/ask-a-dog/"
              codeURL="https://github.com/knowyourenemy/ask-a-dog"
              badges={[react_icon, html5_icon, css3_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={personal_website_v1_image}
              header="Personal Website"
              year="2021"
              body="A responsive personal website developed using React.js and hosted on Amazon Web Services (AWS) during my summer break in 2021."
              projectURL="https://aadipatwari.com/"
              codeURL="https://github.com/knowyourenemy/personal_website"
              badges={[react_icon, html5_icon, css3_icon, aws_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={jelakbot_image}
              header="JelakBot"
              year="2021"
              body="A telegram bot that lets college students hop onto food orders to share delivery costs. Developed with my friends using Python during NUS Hack&Roll 2021."
              projectURL="https://devpost.com/software/jelak-bot"
              codeURL="https://github.com/leonardtng/JelakBot"
              badges={[python_icon, telegram_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={street_view_image}
              header="VJC Street View"
              year="2017"
              body="A 360° map of my high school that lets students view the campus virtually. Developed with my school's Makers Club using the Google Maps JavaScript API."
              projectURL="https://vjmakers.github.io/street-view/"
              codeURL="https://github.com/vjmakers/street-view"
              badges={[google_maps_icon, javascript_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={sentry_image}
              header="Sentry"
              year="2016"
              body="In this game, players have to protect their base from incoming enemies. Developed with T-Rekt Games using the Unity Game Engine."
              projectURL="https://play.google.com/store/apps/details?id=com.trekt.sentry&hl=en_SG&gl=US"
              codeURL="https://github.com/T-RektGames/Sentry-Unity"
              badges={[unity_icon, csharp_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={escape_earth_image}
              header="Escape Earth"
              year="2015"
              body="In this game, players have to escape Earth's atmosphere and avoid projectiles while doing so. Developed with T-Rekt Games using the libGDX Game Engine."
              projectURL="https://play.google.com/store/apps/details?id=com.aaditya.escapeearth&hl=en_SG&gl=US"
              codeURL="https://github.com/T-RektGames/Escape-Earth"
              badges={[libgdx_icon, java_icon]}
            />
          </ul>
          <ul className="cards-row">
            <Card
              src={ballistics_image}
              header="Ballistics"
              year="2015"
              body="Inspired by Pong, this 2D arcade game can be played in both single or multiplayer mode. Developed with T-Rekt Games using the Processing library."
              projectURL="https://play.google.com/store/apps/details?id=processing.test.ballistics&hl=en_SG&gl=US"
              codeURL="https://github.com/T-RektGames/Ballistics"
              badges={[processing_icon, java_icon]}
            />
          </ul>
        </LightSpeed>
      </div>

      <div className="cards-container-mobile">
        <LightSpeed left>
          <ul className="cards-row-mobile">
            <CardMobile
              src={catsofsg_image}
              header="Cats of SG"
              year="2023"
              body="A website advocating for community cats in Singapore."
              projectURL="https://catsofsg.com/"
              // codeURL="https://github.com/knowyourenemy/catsofsg-frontend"
              badges={[
                react_icon,
                typescript_icon,
                express_icon,
                mongo_icon,
                google_cloud_icon,
                docker_icon,
              ]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={ploont_image}
              header="Ploont"
              year="2022"
              body="An online plant shop specialising in aroids. Closed down in December 2022."
              websiteURL="https://www.instagram.com/ploontsg/"
              badges={[squarespace_icon, instagram_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={saving_ync_image}
              header="Saving Yale-NUS"
              year="2021"
              body="A website for students of Yale-NUS College to document their grief over the sudden and unjustified closure of the college."
              projectURL="https://savingyalenus.com/"
              badges={[html5_icon, tailwind_icon, typescript_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={studio_log_image}
              header="Studio Log"
              year="2021"
              body="A website that allows musicians to keep track of the hours they spend on their instruments. Developed using Django during my summer break in 2021."
              // projectURL="https://studiolog.herokuapp.com"
              codeURL="https://github.com/knowyourenemy/studiolog"
              badges={[django_icon, python_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={ask_a_dog_image}
              header="Ask a Dog"
              year="2021"
              body="A website that answers questions with a picture of a dog and a famous quote. Developed using React.js during my summer break in 2021."
              projectURL="https://knowyourenemy.github.io/ask-a-dog/"
              codeURL="https://github.com/knowyourenemy/ask-a-dog"
              badges={[react_icon, html5_icon, css3_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={personal_website_v1_image}
              header="Personal Website"
              year="2021"
              body="A responsive personal website developed using React.js and hosted on Amazon Web Services (AWS) during my summer break in 2021."
              projectURL="https://aadipatwari.com/"
              codeURL="https://github.com/knowyourenemy/personal_website"
              badges={[react_icon, html5_icon, css3_icon, aws_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={jelakbot_image}
              header="JelakBot"
              year="2021"
              body="A telegram bot that lets college students hop onto food orders to share delivery costs. Developed with my friends using Python during NUS Hack&Roll 2021."
              projectURL="https://devpost.com/software/jelak-bot"
              codeURL="https://github.com/leonardtng/JelakBot"
              badges={[python_icon, telegram_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={street_view_image}
              header="VJC Street View"
              year="2017"
              body="A 360° map of my high school that lets students view the campus virtually. Developed with my school's Makers Club using the Google Maps JavaScript API."
              projectURL="https://vjmakers.github.io/street-view/"
              codeURL="https://github.com/vjmakers/street-view"
              badges={[google_maps_icon, javascript_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={sentry_image}
              header="Sentry"
              year="2016"
              body="In this game, players have to protect their base from incoming enemies. Developed with T-Rekt Games using the Unity Game Engine."
              projectURL="https://play.google.com/store/apps/details?id=com.trekt.sentry&hl=en_SG&gl=US"
              codeURL="https://github.com/T-RektGames/Sentry-Unity"
              badges={[unity_icon, csharp_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={escape_earth_image}
              header="Escape Earth"
              year="2015"
              body="In this game, players have to escape Earth's atmosphere and avoid projectiles while doing so. Developed with T-Rekt Games using the libGDX Game Engine."
              projectURL="https://play.google.com/store/apps/details?id=com.aaditya.escapeearth&hl=en_SG&gl=US"
              codeURL="https://github.com/T-RektGames/Escape-Earth"
              badges={[libgdx_icon, java_icon]}
            />
          </ul>
          <ul className="cards-row-mobile">
            <CardMobile
              src={ballistics_image}
              header="Ballistics"
              year="2015"
              body="Inspired by Pong, this 2D arcade game can be played in both single or multiplayer mode. Developed with T-Rekt Games using the Processing library."
              projectURL="https://play.google.com/store/apps/details?id=processing.test.ballistics&hl=en_SG&gl=US"
              codeURL="https://github.com/T-RektGames/Ballistics"
              badges={[processing_icon, java_icon]}
            />
          </ul>
        </LightSpeed>
      </div>
    </div>
  );
}

export default Projects;
