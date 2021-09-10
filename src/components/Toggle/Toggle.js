import React, { useState } from "react";
import "./Toggle.css";

const Toggle = (isActive, toggleIsActive) => {
  const [classes, setClasses] = useState({
    toggle: "toggle",
    slider: "toggle-slider",
  });

  const toggle = () => {
    if (!isActive) {
      setClasses({
        toggle: "toggle toggle-active",
        slider: "toggle-slider toggle-slider-active",
      });
    } else {
      setClasses({
        toggle: "toggle .toggle-backward-animation",
        slider: "toggle-slider toggle-slide-backward-animation",
      });
    }
    console.log(toggleIsActive);
    toggleIsActive();
  };

  return (
    <div className={classes.toggle}>
      <div className={classes.slider} onClick={toggle}></div>
    </div>
  );
};

export default Toggle;
