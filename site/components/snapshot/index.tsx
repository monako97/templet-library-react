/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useCallback, useEffect, useState } from 'react';
import CodeBlock from '../code';
import styles from './index.less';

const Snapshot: React.FC<{ path: string; lang: string }> = ({ path, lang }) => {
  const [view, setView] = useState<React.ReactElement>();
  const [code, setCode] = useState<string | null>();

  const handleShowSource = useCallback(() => {
    if (code) {
      setCode(null);
    } else {
      setCode(require('@pkg/' + path + '?raw'));
    }
  }, [code, path]);

  useEffect(() => {
    const v = require('@pkg/' + path).default;

    setView(v);
  }, [path]);

  return (
    <div className={styles.snapshot}>
      <div className={styles.preview}>
        {view}
        <div className={[styles.toolbar, code && styles.open].join(' ')} onClick={handleShowSource}>
          {code ? 'hide' : 'show'} source
        </div>
      </div>
      {code && (
        <div className={styles.code}>
          <CodeBlock code={code} lang={lang} />
        </div>
      )}
    </div>
  );
};

export default Snapshot;
