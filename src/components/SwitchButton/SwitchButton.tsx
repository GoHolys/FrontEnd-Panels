import React from "react";
import styles from "./SwitchButton.module.css";
import { SwitchButtonProps } from "./SwitchButtonTypes";

const SwitchButton = ({
  backgroundColor,
  handleSetIsActivated,
}: SwitchButtonProps) => {
  return (
    <label className={styles.switch} style={{ backgroundColor }}>
      <input
        type="checkbox"
        className="hello"
        onClick={() => handleSetIsActivated()}
      />
      <span className={styles.slider} />
    </label>
  );
};

export default SwitchButton;
