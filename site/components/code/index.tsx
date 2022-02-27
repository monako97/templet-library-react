import React from 'react';
import { Markdown } from 'react-hooks-widget';
import styles from './index.less';

const CodeBlock: React.FC<{ code: string; lang: string }> = ({ code, lang }) => {
  return (
    <Markdown
      text={`\
\`\`\`${lang}
${code}
\`\`\`\n
  `}
      className={styles.code}
      pictureViewer={false}
    />
  );
};

export default CodeBlock;
