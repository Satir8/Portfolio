import React, { Component, createRef } from "react";
// import { Link } from "react-router-dom";
import sprite from "../../../img/icons/sprite.svg";
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
    const { onCloseModal, onPrev, onNext } = this.props;

    e.code === "Escape" && onCloseModal();
    e.code === "ArrowLeft" && onPrev();
    e.code === "ArrowRight" && onNext();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;
    if (current && e.target !== current) return;
    this.props.onCloseModal();
  };

  render() {
    const {
      data,
      onCloseModal,
      onNext,
      onPrev,
      nextObjTitle,
      prevObjTitle
    } = this.props;
    const { title, url, img, tags, description } = data;
    return (
      <div
        ref={this.overlayRef}
        onClick={e => this.handleOverlayClick(e)}
        className={styles.modal__overlay}
      >
        <>
          <div className={styles.arrowWrapper}>
            <div className={styles.inlineArrowWrapper} onClick={onPrev}>
              <svg className={styles.modal__arrows}>
                <use href={sprite + "#left"} />
              </svg>
              <p className={styles.arrowObjTitle}>{prevObjTitle}</p>
            </div>
            <div className={styles.inlineArrowWrapper} onClick={onNext}>
              <p className={styles.arrowObjTitle}>{nextObjTitle}</p>
              <svg className={styles.modal__arrows}>
                <use href={sprite + "#right"} />
              </svg>
            </div>
          </div>
          <div className={styles.modal}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.modal__title}>{title}</h2>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={[styles.modal__link, styles.modal__linkMd].join(" ")}
              >
                visit the website
              </a>
            </div>
            <p className={styles.modal__description}>
              {description}
              <span>Pet project.</span>
            </p>

            <div className={styles.modal__imgWrapper}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modal__linkSm}
              >
                <img
                  src={require(`../../../img/preview/${img}`)}
                  alt=""
                  className={styles.modal__Image}
                />
                <div className={styles.modal__imgOverlay}></div>

                <div className={styles.item_bar}>
                  <h2 className={styles.barHeading}>visit the website</h2>
                </div>
              </a>
            </div>
            {/* <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={[styles.modal__link, styles.modal__linkSml].join(" ")}
          >
            visit the site
          </a> */}

            <h2 className={styles.modal__subTitle}>Technical Sheet</h2>
            <p className={styles.modal__description}>
              Code technologies I got involved with while working on this
              project.
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
        </>
      </div>
    );
  }
}

export default Modal;
