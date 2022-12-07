import styles from "./AlertsSummary.module.css";
import { AlertsSummaryProps } from "./AlertsSummaryTypes";

const AlertsSummary = ({ headTitle, alerts }: AlertsSummaryProps) => {
  return (
    <div className={styles.headline}>
      <h3>{headTitle}</h3>
      <div className={styles.alertsContainer}>
        {alerts.map((alert) => (
          <div key={alert.id}>
            <div className={styles.alertTitle}>{alert.title}</div>
            <div className={styles.alertValue}>{alert.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsSummary;
