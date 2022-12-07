import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { RefreshIcon } from "../../consts/images/RefreshIcon";
import styles from "./StatusSection.module.css";
import { StatusSectionProps } from "./StatusSectionTypes";
import { GraphImage } from "../../consts/images/GraphImage";
import Indicator from "../Indicator/Indicator";
import { DownArrow } from "../../consts/images/DownArrow";

const StatusSection = ({ title, value }: StatusSectionProps) => {
  const [timePeriod, setTimePeriod] = useState("Day");
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const dropDownRef = useRef<HTMLUListElement>(null);

  const sortData = ["Day", "Week", "Month", "Quarter"];

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsDropDownActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const timeDropDown = (
    <ul className={styles.timeDropDown} ref={dropDownRef}>
      {sortData.map((item, i) => (
        <div key={item}>
          <li
            className={styles.dropDownItem}
            onClick={() => setTimePeriod(item)}
          >
            {item}
          </li>
          {i < sortData.length - 1 && <hr />}
        </div>
      ))}
    </ul>
  );

  const topRightSection = (
    <div className={styles.topRightSection}>
      <span className={styles.sortOption}>Sort by</span>
      <div
        className={styles.sortContainer}
        onClick={() => setIsDropDownActive((prev) => !prev)}
      >
        <div className={styles.timePeriod}>{timePeriod}</div>
        <DownArrow />
        {isDropDownActive && timeDropDown}
      </div>
      <RefreshIcon />
    </div>
  );
  return (
    <div className={styles.statusSectionContainer}>
      <div className={styles.topSection}>
        <span className={styles.title}>{title}</span>
        {topRightSection}
      </div>
      <div className={styles.middleSection}>
        <span className={styles.statusPercentage}>{value}</span>
        <div className={styles.indicators}>
          <Indicator title="Active" color="#39e194" backgroundColor="#0a4400" />
          <Indicator
            title="Inactive"
            color=" #ff275b"
            backgroundColor=" #500a1b"
          />
        </div>
      </div>
      <div className={styles.bottomSection}>{<GraphImage />}</div>
    </div>
  );
};

export default StatusSection;
