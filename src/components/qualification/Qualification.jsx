import React, { useState } from "react";
import "./Qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active  button--flex"
                : "qualification_button   button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active  button--flex"
                : "qualification_button   button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">High School</h3>
                <span className="qualification_subtitle">
                  KC International School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  2005-2019
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">B.Tech Computer Science</h3>
                <span className="qualification_subtitle">
                  Jaypee University Of Information Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020-2024
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Udemy</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  June 2021 - Aug 2021
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Study</h3>
                <span className="qualification_subtitle">
                  KC International School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  2006-2019
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Freelancing</h3>
                <span className="qualification_subtitle">Fiverr</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  Feb 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Development Intern</h3>
                <span className="qualification_subtitle">Zebo.AI</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  April 2021 - June 2021
                </div>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web internDevelopment</h3>
                <span className="qualification_subtitle">
                  KC International School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  2006-2019
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Study</h3>
                <span className="qualification_subtitle">
                  KC International School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  2006-2019
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
