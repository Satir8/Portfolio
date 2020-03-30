import React, { Component } from "react";
import styles from "./WelcomePage.module.css";
import skills from "./skills.json";

class WelcomePage extends Component {
  // state = {  }
  render() {
    return (
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
            Hi, I'm Gregory Yakovina, frontend developer
          </h1>
          <h2 className={styles.welcome__mainSubtitle}>
            Well skilled in frontend and improving my mastery every day
          </h2>

          <p className={styles.welcome__description}>
            Feel free to take a look at my latest projects on the web
            <span>portfolio page</span>
          </p>

          <h2 className={styles.welcome__mainSubtitle}>About me</h2>
          <p className={styles.welcome__description}>
            I'm open to work with a company, where I could grow my skills
            effectively and apply my knowledge, to get a great professional
            experience.
          </p>

          <h2 className={styles.welcome__mainSubtitle}>My skills</h2>
          <ul className={styles.welcome__skillsList}>
            {skills.map((item, idx) => (
              <li className={styles.welcome__skillsItem} key={idx}>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={require("../../cv/Grygorii Yakovina.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.welcome__downloadLink}
          >
            View Resume
          </a>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
