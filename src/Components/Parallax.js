import React, { useState } from "react";

import { Navigation } from "./Navigation";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen4 from "./Screen4";
import Modal from "./Modal";
import "../css/Parallax.css";

const Parallax = props => {
  const [activeCard, setActiveCard] = useState("0");

  const changeActiveHandler = eventKey => {
    setActiveCard(eventKey);
  };

  const [modalId, setModalId] = useState(0);

  const changeModalHandler = modalKey => {
    setModalId(modalKey);
  };

  return (
    <div className="app-container">
      <Navigation changeActiveCard={changeActiveHandler} />
      <div className="wrapper">
        <Screen1 showModal={changeModalHandler} />
        <Screen2
          activeCard={activeCard}
          changeActiveCard={changeActiveHandler}
        />
        <Screen4 />
        <Modal modalId={modalId} setModalId={changeModalHandler} />
      </div>
    </div>
  );
};

export default Parallax;
