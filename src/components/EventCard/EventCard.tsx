import React from "react";
import styles from "./EventCard.module.css";
import HeadSection from "../HeadSection/HeadSection";
import { EventsIcon } from "../../consts/images/EventsIcon";
import { ThreeDotsIcon } from "../../consts/images/ThreeDotsIcon";
import { XIcon } from "../../consts/images/XIcon";
import { eventCardProps } from "./EventCardTypes";
import { PinkPointIcon } from "../../consts/images/PinkPointIcon";
import Divider from "../Divider/Divider";
import DataSection from "../DataSection/DataSection";
import BottomButton from "../BottomButton/BottomButton";
import { ActionIcon } from "../../consts/images/ActionsIcon";
import { ExportIcon } from "../../consts/images/ExportIcon";

const EventCard = ({ details }: eventCardProps) => {
  const rightHeadSection = (
    <div className={styles.rightSection}>
      <div className={styles.threeDotsIcon}>
        <ThreeDotsIcon />
      </div>
      <div className={styles.xIcon}>
        <XIcon />
      </div>
    </div>
  );

  const topBottomSection = (
    <div className={styles.topBottomSectionContainer}>
      <div className={styles.topBottomSectionLeft}>{details.date}</div>
      <div className={styles.topBottomSectionRight}>
        {<PinkPointIcon />}
        <span className={styles.eventsState}>{details.state}</span>
      </div>
    </div>
  );

  return (
    <div className={styles.cardContainer}>
      <HeadSection
        title="Event Details"
        leftIcon={<EventsIcon />}
        rightSection={rightHeadSection}
        bottomSection={topBottomSection}
      />
      <Divider />
      <div className={styles.dataSection}>
        {details &&
          details.sections.map((section, i) => (
            <div key={section.id}>
              <DataSection headTitle={section.headline} data={section.fields} />
              {i < details.sections.length - 1 && <Divider />}
            </div>
          ))}
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.exportButton}>
          <BottomButton
            title="Export"
            backgroundColor="white"
            color="black"
            leftIcon={<ExportIcon />}
          />
        </div>
        <div className={styles.actionsButton}>
          <BottomButton
            title="Actions"
            backgroundColor="black"
            color="white"
            rightIcon={<ActionIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
