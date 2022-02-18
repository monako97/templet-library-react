import React from 'react';
import { Markdown } from 'react-hooks-widget';
import styles from './index.less';

const MBox: React.FC<{ text: string }> = ({ text }) => {
  return <Markdown text={text} className={styles.markdown} pictureViewer />;
};

export default MBox;
