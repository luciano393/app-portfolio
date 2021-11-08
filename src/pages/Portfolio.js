import React from "react";
import { Heading } from "../components/Heading";
import { ProjectContent } from "../components/ProjectContent";

import imageOne from "../assets/images/GetStartedMobile.png";
import imageTwo from "../assets/images/MainMobile.png";

export const Portfolio = () => {
  return (
    <div>
      <section className="Portfolio">
        <Heading text="My" span="Portfolio" />
        <div className="box-container">
          <ProjectContent
            imageOne={imageOne}
            imageTwo={imageTwo}
            title="Payments"
            info="App Web FullStack made in MongoDB, Express JS, React JS y Node JS"
          />
        </div>
      </section>
    </div>
  );
};
