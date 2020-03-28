import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import dataJSON from "../../data.json";
import Modal from "./modal/Modal";
import styles from "./Portfolio.module.css";

class Portfolio extends Component {
  state = {
    data: [],
    isModal: false
  };

  componentDidMount() {
    const newData = dataJSON.map(item => ({ ...item, id: uuidv4() }));
    this.setState({ data: newData });
  }

  handleOpenModal = e => {
    // const targetId = e.target;
    console.log(e.target);
    console.log(e.target.id);
    // console.dir(e.target);
    // console.log(id);
    // this.setState(prev => {
    //   const targetImg = prev.pictures.filter(item => item.id === imgId);
    //   return {
    //     isModalOpen: true,
    //     modalImageUrl: targetImg[0].largeImageURL
    //   };
    // });
    this.setState({ isModal: true });
  };

  handleCloseModal = e => {
    this.setState({ isModal: false });
  };

  render() {
    const { data, isModal } = this.state;
    // console.log(data);
    return (
      <>
        <h2>Portfolio</h2>
        <ul className={styles.list}>
          {data.map(({ title, preview, tags, id }) => {
            // console.log(id);
            return (
              <li
                className={styles.list__item}
                key={id}
                // id={id}
                // onClick={this.handleOpenModal}
              >
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
        {isModal && <Modal onCloseModal={this.handleCloseModal} />}
      </>
    );
  }
}

export default Portfolio;
