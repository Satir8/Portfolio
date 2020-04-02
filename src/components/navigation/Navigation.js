import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

class Navigation extends Component {
  render() {
    return (
      <nav className={styles.pageNav}>
        <ul className={styles.pageNav__list}>
          <li className={styles.pageNav__listItem}>
            {" "}
            <NavLink
              to="/"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Welcome
            </NavLink>
          </li>
          <li className={styles.pageNav__listItem}>
            {" "}
            <NavLink
              exact
              to="/portfolio"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Portfolio
            </NavLink>
          </li>
          <li className={styles.pageNav__listItem}>
            {" "}
            <NavLink
              to="/contact"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
