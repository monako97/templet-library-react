import React, { useCallback, useState } from 'react';
import CodeBlock from '../code';
import styles from './index.less';

const Snapshot: React.FC<{ path: string; lang: string }> = ({ path, lang }) => {
  const [code, setCode] = useState<string | null>();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const view = require('@pkg/' + path).default;
  const handleShowSource = useCallback(() => {
    if (code) {
      setCode(null);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      setCode(require('@pkg/' + path + '?raw'));
    }
  }, [code, path]);

  return (
    <div className={styles.snapshot}>
      <div className={styles.preview}>
        <div className={styles.view}>{React.createElement(view)}</div>
        <div className={[styles.toolbar, code && styles.open].join(' ')} onClick={handleShowSource}>
          {code ? 'hide' : 'show'} source
        </div>
      </div>
      {code && (
        <div className={styles.code}>
          <CodeBlock code={code as string} lang={lang} />
        </div>
      )}
    </div>
  );
};

export default Snapshot;
