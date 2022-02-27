import React, { useEffect, useRef } from 'react';
import { projectBasicInfo, useLocation, useOutlet } from 'plugin-runtime';
import Menu from '../components/menu';
import styles from './index.less';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { BackTop } from 'react-hooks-widget';

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
        <Menu />
        <article className={styles.container}>
          <main>
            <article className={styles.readme} ref={box}>
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
