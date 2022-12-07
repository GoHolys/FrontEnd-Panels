import React from "react";
import { IndicatorProps } from "./IndicatorTypes";
import styles from "./Indicator.module.css";

const Indicator = ({ title, color, backgroundColor }: IndicatorProps) => {
  return (
    <div className={styles.indicator} style={{ color, backgroundColor }}>
      {title}
    </div>
  );
};

export default Indicator;
