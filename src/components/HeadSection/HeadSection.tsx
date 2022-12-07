import React from "react";
import { HeadSectionProps } from "./HeadSectionTypes";
import styles from "./HeadSection.module.css";

const HeadSection = ({
  leftIcon,
  title,
  rightSection,
  bottomSection,
}: HeadSectionProps) => {
  return (
    <div className={styles.headContainer}>
      <div className={styles.topSection}>
        <div className={styles.leftSection}>
          {leftIcon}
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.rightSection}>{rightSection}</div>
      </div>
      <div className={styles.bottomSection}>{bottomSection}</div>
    </div>
  );
};

export default HeadSection;
