import React from "react";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>

      <div className="skills_container container grid">
        <FrontEnd />
        <BackEnd />
      </div>
    </section>
  );
};

export default Skills;
