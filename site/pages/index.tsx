import React, { useRef } from 'react';
import { projectBasicInfo, useOutlet } from 'plugin-runtime';
import Menu from '../components/menu';
import styles from './index.less';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { BackTop } from 'react-hooks-widget';

const App: React.FC = () => {
  const box = useRef(null);
  const readme = useOutlet();

  return (
    <ConfigProvider {...projectBasicInfo.providerConfig} locale={zh_CN}>
      <div className={styles.layout}>
        <Menu />
        <article className={styles.container}>
          <Header />
          <main ref={box}>
            <article className={styles.readme}>{readme}</article>
            <Footer />
            <BackTop target={() => box.current || document.body} />
          </main>
        </article>
      </div>
    </ConfigProvider>
  );
};

export default App;
