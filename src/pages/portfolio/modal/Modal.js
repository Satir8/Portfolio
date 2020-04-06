import React, { Component, createRef } from "react";
import { CSSTransition } from "react-transition-group";
import sprite from "../../../img/icons/sprite.svg";
import styles from "./Modal.module.css";
import opacityTransitions from "../../../transitions/opacityTransitions.module.css";
import listItemTransitions from "../../../transitions/listItemTransitions.module.css";

class Modal extends Component {
  overlayRef = createRef();
  state = {
    isArrowsMount: false,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
    setTimeout(() => {
      this.setState({ isArrowsMount: true });
    }, 800);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
    this.setState({ isArrowsMount: false });
  }

  handleKeyPress = (e) => {
    const { onCloseModal, onPrev, onNext } = this.props;

    e.code === "Escape" && onCloseModal();
    e.code === "ArrowLeft" && onPrev();
    e.code === "ArrowRight" && onNext();
  };

  handleOverlayClick = (e) => {
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
      prevObjTitle,
      isMount,
      isNewImg,
    } = this.props;
    const { title, url, img, tags, description } = data;
    const { isArrowsMount } = this.state;
    return (
      <>
        <div
          ref={this.overlayRef}
          onClick={(e) => this.handleOverlayClick(e)}
          className={styles.modal__overlay}
        >
          <div className={styles.arrowWrapper}>
            <div
              className={[
                styles.inlineArrowWrapper,
                isArrowsMount ? styles.active : undefined,
              ].join(" ")}
              onClick={onPrev}
            >
              <svg className={styles.modal__arrows}>
                <use href={sprite + "#left"} />
              </svg>
              <p className={styles.arrowObjTitle}>{prevObjTitle}</p>
            </div>
            <div
              className={[
                styles.inlineArrowWrapper,
                isArrowsMount ? styles.active : undefined,
              ].join(" ")}
              onClick={onNext}
            >
              <p className={styles.arrowObjTitle}>{nextObjTitle}</p>
              <svg className={styles.modal__arrows}>
                <use href={sprite + "#right"} />
              </svg>
            </div>
          </div>
          <CSSTransition
            in={isMount}
            timeout={1700}
            classNames={opacityTransitions}
            unmountOnExit
          >
            <div className={styles.modal}>
              <div className={styles.titleWrapper}>
                <h2 className={styles.modal__title} id="#style-4">
                  {title}
                </h2>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[styles.modal__link, styles.modal__linkMd].join(
                    " "
                  )}
                >
                  visit the website
                </a>
              </div>
              <p className={styles.modal__description}>
                {description}
                <span>Pet project.</span>
              </p>
              {/* <CSSTransition
                in={isNewImg}
                timeout={600}
                classNames={listItemTransitions}
              > */}
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
              {/* </CSSTransition> */}
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
          </CSSTransition>
        </div>
      </>
    );
  }
}

export default Modal;
