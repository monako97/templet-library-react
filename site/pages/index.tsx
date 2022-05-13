import React, { useEffect, useRef } from 'react';
import { projectBasicInfo, useLocation, useOutlet } from 'plugin-runtime';
import styles from './index.less';
import { ConfigProvider, BackTop } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import Sider from '../components/sider';
import Coverage from '@/components/coverage';

ConfigProvider.config(projectBasicInfo.providerConfig);

const App: React.FC = () => {
  const box = useRef<HTMLElement>(null);
  const readme = useOutlet();
  const location = useLocation();

  useEffect(() => {
    box.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <ConfigProvider {...projectBasicInfo.providerConfig} locale={zh_CN}>
      <div className={styles.layout}>
        <Sider />
        <article className={styles.container}>
          <main>
            <article className={styles.readme} ref={box}>
              <Coverage />
              {readme}
            </article>
            <BackTop target={() => box.current || document.body} />
          </main>
        </article>
      </div>
    </ConfigProvider>
  );
};

export default App;
