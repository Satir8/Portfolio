import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import dataJSON from "../../data.json";
import Modal from "./modal/Modal";
import styles from "./Portfolio.module.css";

class Portfolio extends Component {
  state = {
    data: [],
    isModal: false,
    modalObject: {},
    modalIdx: 0,
    prevObjTitle: "",
    nextObjTitle: ""
  };

  componentDidMount() {
    const newData = dataJSON.map(item => ({ ...item, id: uuidv4() }));
    this.setState({ data: newData });
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, modalIdx } = this.state;
    const prevObj = modalIdx - 1 < 0 ? data.length - 1 : modalIdx - 1;
    const nextObj = modalIdx < data.length - 1 ? modalIdx + 1 : 0;
    if (prevState.modalIdx !== modalIdx) {
      this.setState({
        modalObject: data[modalIdx],
        prevObjTitle: data[prevObj].title,
        nextObjTitle: data[nextObj].title
      });
    }
  }

  handleNextObject = () => {
    const { data, modalIdx } = this.state;
    modalIdx < data.length - 1
      ? this.setState(prev => ({ modalIdx: prev.modalIdx + 1 }))
      : this.setState({ modalIdx: 0 });
  };

  handlePrevObject = () => {
    const { data, modalIdx } = this.state;
    modalIdx - 1 < 0
      ? this.setState({ modalIdx: data.length - 1 })
      : this.setState(prev => ({ modalIdx: prev.modalIdx - 1 }));
  };

  handleOpenModal = e => {
    const { data } = this.state;
    const targetId = e.target.id;
    const targetObj = data.find(item => item.id === targetId);
    const targetIdx = data.indexOf(targetObj);
    console.log(targetIdx);
    this.setState({
      isModal: true,
      modalObject: targetObj,
      modalIdx: targetIdx
    });
  };

  handleCloseModal = e => {
    this.setState({ isModal: false });
  };

  render() {
    const {
      data,
      isModal,
      modalObject,
      prevObjTitle,
      nextObjTitle
    } = this.state;
    return (
      <>
        <div className={styles.pageWrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.pageTitle}>frontend developer portfolio</h2>
              <a
                href={require("../../cv/Grygorii Yakovina.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadLink}
              >
                View Resume
              </a>
            </div>
            <p className={styles.pageDescription}>
              From HTLM semantic and CSS modules to ReactJS and Redux. Here you
              can take a look at some of my latest projects.
            </p>
            <ul className={styles.list}>
              {data.map(({ title, preview, tags, id }) => {
                return (
                  <li className={styles.list__item} key={id}>
                    <div
                      className={styles.wrapper}
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
                      <div className={styles.tags}>
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
                );
              })}
            </ul>
            {isModal && (
              <Modal
                nextObjTitle={nextObjTitle}
                prevObjTitle={prevObjTitle}
                data={modalObject}
                onCloseModal={this.handleCloseModal}
                onNext={this.handleNextObject}
                onPrev={this.handlePrevObject}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
