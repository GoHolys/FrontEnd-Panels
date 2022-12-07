import React from "react";
import { BottomButtonProps } from "./BottomButtonTypes";
import styles from "./BottomButton.module.css";

const BottomButton = ({
  backgroundColor,
  color,
  title,
  leftIcon,
  rightIcon,
}: BottomButtonProps) => {
  return (
    <button
      className={styles.buttonContainer}
      style={{
        backgroundColor,
        color,
      }}
    >
      <div className={styles.leftIcon}>{leftIcon && leftIcon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.rightIcon}>{rightIcon && rightIcon}</div>
    </button>
  );
};

export default BottomButton;
