import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";
import skills from "./skills.json";

class WelcomePage extends Component {
  render() {
    return (
      <>
        <div className={styles.welcome__pageWrapper}>
          <div className={styles.welcome__innerWrapper}>
            <div className={styles.welcome__photoWrapper}>
              <img
                src={require(`../../img/photo.jpg`)}
                alt="That was my photography"
                className={styles.welcome__photo}
              />
              <div className={styles.welcome__overlay}></div>
            </div>
            <h1 className={styles.welcome__mainTitle}>
              Hi, I'm Gregory, frontend developer
            </h1>
            <h2 className={styles.welcome__mainSubtitle}>
              Well skilled in frontend and improving my mastery every day
            </h2>

            <p className={styles.welcome__description}>
              Feel free to take a look at my latest projects on the{" "}
              <Link to="/portfolio" className={styles.welcome__link}>
                portfolio page
              </Link>
              <span className={styles.contactSpan}>
                To get in touch visit the{" "}
                <Link to="/contact" className={styles.welcome__link}>
                  contact page
                </Link>
              </span>
              <span className={styles.contactSpanMd}>
                If you want to get in touch visit the{" "}
                <Link to="/contact" className={styles.welcome__link}>
                  contact page
                </Link>
              </span>
            </p>

            <h2 className={styles.welcome__mainSubheading}>About me</h2>
            <p className={styles.welcome__description}>
              I'm open to work with a company, where I could effectively grow my
              skills and apply my knowledge, to get a great professional
              experience.
              <span>
                If you are interested, take a look at{" "}
                <a
                  href={require("../../cv/GregoryYakovina.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.welcome__link}
                >
                  my resume
                </a>
                .
              </span>
            </p>
            <h2 className={styles.welcome__mainSubheading}>My skills</h2>
            <ul className={styles.welcome__skillsList}>
              {skills.map((item, idx) => (
                <li className={styles.welcome__skillsItem} key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default WelcomePage;
