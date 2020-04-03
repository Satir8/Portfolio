import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

class Navigation extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { onToggle } = this.props;
    e.code === "Escape" && onToggle();
  };

  render() {
    const { onToggle } = this.props;
    return (
      <nav className={styles.pageNav}>
        <ul className={styles.pageNav__list}>
          <li className={styles.pageNav__listItem}>
            {" "}
            <NavLink
              to="/"
              exact
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              onClick={onToggle}
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
              onClick={onToggle}
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
              onClick={onToggle}
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
