import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

class Modal extends Component {
  overlayRef = createRef();

  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== "Escape") return;
    this.props.onCloseModal();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;
    if (current && e.target !== current) return;
    this.props.onCloseModal();
  };

  render() {
    return (
      <div
        ref={this.overlayRef}
        onClick={e => this.handleOverlayClick(e)}
        className={styles.modal__overlay}
      >
        <div className={styles.modal}>
          <h2 className={styles.modal__title}>title</h2>
          <p className={styles.modal__description}>description</p>
          {/* <Link target="_blank">visit the website</Link> */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            visit the website
          </a>
          <img src="" alt="" className={styles.modal__Image} />
          <h2 className={styles.modal__title}>about title</h2>
          <p className={styles.modal__description}>about description</p>
          <h2 className={styles.modal__title}>Technical Sheet</h2>
          <p className={styles.modal__description}>
            Code technologies I got involved with while working on this project.
          </p>
          <ul className={styles.modal__techList}>
            <li className={styles.techList__item}></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Modal;
