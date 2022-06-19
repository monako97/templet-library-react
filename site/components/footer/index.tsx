import React from 'react';
import styles from './index.less';
import { projectBasicInfo } from 'plugin-runtime';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <a href={projectBasicInfo.programInfo.repository} target="_blank" rel="noopener noreferrer">
          {projectBasicInfo.projectName}
        </a>
        {` ${year} Created by `}
        <a href="" target="_blank" rel="noopener noreferrer">
          {projectBasicInfo.programInfo.author.toString()}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
