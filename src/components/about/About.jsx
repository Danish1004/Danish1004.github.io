import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container ">
        <div className="about_data">
          <p className="about_description">
            I understand and solve problems in a creative way.<br></br> I am
            looking for opportunities that will overall improve my analytical
            thinking and would help me to grow more. Looking forward to connect
            with like-minded people. I always have been keen to improve my
            skills to be market-ready.
            <p>
              <br />
              When not working alongside clients, I thoroughly enjoy getting to
              create and spend time on personla projects, whether thats a new
              project I am making from scratch or for a hackathon.
            </p>
          </p>

          <a
            download=""
            href="https://drive.google.com/file/d/1IHjx49yZhFLpygv7LdhDlXIc-nY6hovT/view?usp=sharing"
            className="button button--flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
