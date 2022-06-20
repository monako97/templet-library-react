import React from 'react';
import { projectBasicInfo } from 'plugin-runtime';
import styles from './index.less';

const Empty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <p className={styles.info}>
        <h3>{projectBasicInfo.projectName.replace('-', ' ')}</h3>
        <span className={styles.desc}>{projectBasicInfo.programInfo.description}</span>
      </p>
      <p className={styles.info}>
        <h3>version:</h3>
        <span className={styles.desc}>{projectBasicInfo.programInfo.version}</span>
      </p>
      <p className={styles.info}>
        <h3>author:</h3>
        <span className={styles.desc}>{projectBasicInfo.programInfo.author.toString()}</span>
      </p>
    </div>
  );
};

export default Empty;
