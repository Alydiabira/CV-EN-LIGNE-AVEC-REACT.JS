import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Up = () => {
  const swipeUp = () => {
    const buttonUp = document.getElementById("swipe-up");
    console.log(buttonUp);
    buttonUp.addEventListener("onClick", function () {
      document.documentElement.scrollTop = 0;
    });
  };

  return (
    <div className="d-flex">
      <button id="swipe-up" onClick={swipeUp}>
        <FontAwesomeIcon icon={faArrowUp} size="2xl" />
      </button>
    </div>
  );
};

export default Up;
