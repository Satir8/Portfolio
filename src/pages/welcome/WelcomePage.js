import React, { Component } from "react";
import styles from "./WelcomePage.module.css";
import skills from "./skills.json";

class WelcomePage extends Component {
  // state = {  }
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
            </div>
            <h1 className={styles.welcome__mainTitle}>
              Hi, I'm Gregory, frontend developer
            </h1>
            <h2 className={styles.welcome__mainSubtitle}>
              Well skilled in frontend and improving my mastery every day
            </h2>

            <p className={styles.welcome__description}>
              Feel free to take a look at my latest projects on the{" "}
              <a className={styles.welcome__link} href="#">
                portfolio page
              </a>
              <span className={styles.contactSpan}>
                To get in touch visit the{" "}
                <a className={styles.welcome__link} href="#">
                  contact page
                </a>
              </span>
            </p>

            <h2 className={styles.welcome__mainSubheading}>About me</h2>
            <p className={styles.welcome__description}>
              I'm open to work with a company, where I could grow my skills
              effectively and apply my knowledge, to get a great professional
              experience.
              <span>
                If you are interested, take a look at my
                <a
                  href={require("../../cv/Grygorii Yakovina.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.welcome__link}
                >
                  resume
                </a>
                .
              </span>
            </p>
            {/* <a
            href={require("../../cv/Grygorii Yakovina.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.welcome__downloadLink}
          >
            Show Resume
          </a> */}

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
