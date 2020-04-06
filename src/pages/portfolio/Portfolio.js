import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import dataJSON from "../../data.json";
import Modal from "./modal/Modal";
import listItemTransitions from "../../transitions/listItemTransitions.module.css";
import slideTransitions from "../../transitions/slideTransitions.module.css";
import styles from "./Portfolio.module.css";

class Portfolio extends Component {
  state = {
    data: [],
    modalObject: {},
    modalIdx: 0,
    prevObjTitle: "",
    nextObjTitle: "",
    isModal: false,
  };

  componentDidMount() {
    const newData = dataJSON.map((item) => ({ ...item, id: uuidv4() }));
    this.setState({ data: newData });
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, modalIdx } = this.state;
    const prevObj = modalIdx - 1 < 0 ? data.length - 1 : modalIdx - 1;
    const nextObj = modalIdx < data.length - 1 ? modalIdx + 1 : 0;
    if (prevState.modalIdx !== modalIdx) {
      setTimeout(() => {
        this.setState({
          modalObject: data[modalIdx],
          prevObjTitle: data[prevObj].title,
          nextObjTitle: data[nextObj].title,
          isMount: true,
        });
      }, 600);
    }
  }

  handleNextObject = () => {
    const { data, modalIdx } = this.state;
    modalIdx < data.length - 1
      ? this.setState((prev) => ({ modalIdx: prev.modalIdx + 1 }))
      : this.setState({ modalIdx: 0 });
    this.setState({ isMount: false });
  };

  handlePrevObject = () => {
    const { data, modalIdx } = this.state;
    modalIdx - 1 < 0
      ? this.setState({ modalIdx: data.length - 1 })
      : this.setState((prev) => ({ modalIdx: prev.modalIdx - 1 }));
    this.setState({ isMount: false });
  };

  handleOpenModal = (e) => {
    const { data } = this.state;
    const targetId = e.target.id;
    const targetObj = data.find((item) => item.id === targetId);
    const targetIdx = data.indexOf(targetObj);
    console.log(targetIdx);
    this.setState({
      isModal: true,
      modalObject: targetObj,
      modalIdx: targetIdx,
      isMount: true,
    });
  };

  handleCloseModal = (e) => {
    this.setState({ isModal: false });
  };

  render() {
    const {
      data,
      isModal,
      modalObject,
      prevObjTitle,
      nextObjTitle,
      isMount,
    } = this.state;
    return (
      <>
        <div className={styles.pageWrapper}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.pageTitle}>web developer portfolio</h2>
            <p className={styles.pageDescription}>
              From HTLM and CSS modules to ReactJS and Redux.
              <span> Here you can see some of my latest pet projects.</span>
            </p>

            <TransitionGroup component="ul" className={styles.list}>
              {data.map(({ title, preview, tags, id }) => {
                return (
                  <CSSTransition
                    in={data.length > 0}
                    key={id}
                    timeout={600}
                    classNames={listItemTransitions}
                  >
                    <li className={styles.list__item}>
                      <div
                        className={styles.activeWrapper}
                        id={id}
                        onClick={this.handleOpenModal}
                      ></div>
                      <div className={styles.item_bar}>
                        <h2 className={styles.barHeading}>{title}</h2>
                      </div>
                      <div className={styles.item__main}>
                        <img
                          className={styles.item__img}
                          src={require(`../../img/preview/${preview}`)}
                          alt="project preview"
                        />
                        <div className={styles.tags__wrapper}>
                          <ul className={styles.tags__list}>
                            {tags.map((item, idx) => (
                              <li className={styles.tags__item} key={idx}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
            <div className={styles.message__wrapper}>
              <h2 className={styles.message__heading}>Let's talk</h2>

              <p className={styles.message__text}>
                Wanna get in touch or talk about a project?{" "}
                <span>
                  Feel free to contact me via email at{" "}
                  <a
                    href="mailto:g.iakovyna@gmail.com"
                    className={styles.message__link}
                  >
                    g.iakovyna@gmail.com
                  </a>
                </span>{" "}
                <span>
                  Or get more contact information at the{" "}
                  <Link to="/contact" className={styles.message__link}>
                    contact page
                  </Link>
                </span>
              </p>
            </div>

            <CSSTransition
              in={isModal}
              timeout={450}
              classNames={slideTransitions}
              unmountOnExit
            >
              {(state) => (
                <Modal
                  nextObjTitle={nextObjTitle}
                  prevObjTitle={prevObjTitle}
                  data={modalObject}
                  onCloseModal={this.handleCloseModal}
                  onNext={this.handleNextObject}
                  onPrev={this.handlePrevObject}
                  isMount={isMount}
                />
              )}
            </CSSTransition>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
