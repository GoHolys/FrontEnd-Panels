import { useState } from "react";
import { ActionIcon } from "../../consts/images/ActionsIcon";
import { AgentIcon } from "../../consts/images/AgentIcon";
import { ExportIcon } from "../../consts/images/ExportIcon";
import { ThreeDotsIcon } from "../../consts/images/ThreeDotsIcon";
import AlertsSummary from "../AlertsSummary/AlertsSummary";
import BottomButton from "../BottomButton/BottomButton";
import DataSection from "../DataSection/DataSection";
import Divider from "../Divider/Divider";
import HeadSection from "../HeadSection/HeadSection";
import Indicator from "../Indicator/Indicator";
import StatusSection from "../StatusSection/StatusSection";
import SwitchButton from "../SwitchButton/SwitchButton";
import styles from "./AgentCard.module.css";
import { AgentDetailsProps } from "./AgentCardTypes";

const AgentCard = ({ details }: AgentDetailsProps) => {
  const [isActivated, setIsActivated] = useState(true);
  const handleSetIsActivated = () => {
    setIsActivated((prev) => !prev);
  };

  return (
    <div className={styles.cardContainer}>
      <HeadSection
        title="Agent Details"
        leftIcon={<AgentIcon />}
        rightSection={
          <div className={styles.headRightSection}>
            <Indicator
              title={isActivated ? "Active" : "Inactive"}
              color={isActivated ? "#39e194" : "#FF275B"}
              backgroundColor={isActivated ? "#0a4400" : "#500A1B"}
            />
            <SwitchButton
              handleSetIsActivated={handleSetIsActivated}
              backgroundColor={isActivated ? "#58C86A" : "#FF0000"}
            />
            <div className={styles.threeDotsIcon}>
            <ThreeDotsIcon />
            </div>
          </div>
        }
      />
      <Divider />
      <AlertsSummary headTitle="Associated Alerts" alerts={details.alerts} />
      <Divider />
      <DataSection data={[details.policyGroup]} />
      <Divider />
      <DataSection headTitle="Meta Data" data={details.metaData.fields} />
      <Divider />
      <StatusSection
        title={details.status.title}
        value={details.status.value}
      />
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

export default AgentCard;
