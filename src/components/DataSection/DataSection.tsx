import styles from "./DataSection.module.css";
import { DataSectionProps } from "./DataSectionTypes";


const DataSection = ({ headTitle, data }: DataSectionProps) => {
  return (
    <div className={styles.dataSectionContainer}>
      <div className={styles.headline}>
        <h3>{headTitle}</h3>
      </div>
      <div className={styles.dataContainer}>
        {data.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemValue}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSection;
