import React, { Component, createRef } from "react";
// import { Link } from "react-router-dom";
import sprite from "./sprite.svg";
import styles from "./Modal.module.css";

class Modal extends Component {
  overlayRef = createRef();

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
    const { data, onCloseModal } = this.props;
    const { title, url, img, tags, description } = data;
    console.log(data);
    return (
      <div
        ref={this.overlayRef}
        onClick={e => this.handleOverlayClick(e)}
        className={styles.modal__overlay}
      >
        <div className={styles.modal}>
          <h2 className={styles.modal__title}>{title}</h2>
          <p className={styles.modal__description}>{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modal__link}
          >
            visit the website
          </a>

          <img
            src={require(`../../../img/preview/${img}`)}
            alt=""
            className={styles.modal__Image}
          />
          <h2 className={styles.modal__subTitle}>Technical Sheet</h2>
          <p className={styles.modal__description}>
            Code technologies I got involved with while working on this project.
          </p>
          <ul className={styles.modal__techList}>
            {tags.map((item, idx) => {
              return (
                <li className={styles.techList__item} key={idx}>
                  {item}
                </li>
              );
            })}
          </ul>

          <svg className={styles.closeIcon} onClick={onCloseModal}>
            <use href={sprite + "#close"} />
          </svg>
        </div>
      </div>
    );
  }
}

export default Modal;
