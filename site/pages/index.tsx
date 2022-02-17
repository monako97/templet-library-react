import React from 'react';
import { useOutlet } from 'plugin-runtime';
import Menu from '../components/menu';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './index.less';

const App: React.FC = () => {
  const readme = useOutlet();

  return (
    <div className={styles.layout}>
      <Menu />
      <article className={styles.container}>
        <Header />
        <main>
          <article className={styles.readme}>{readme}</article>
          <Footer />
        </main>
      </article>
    </div>
  );
};

export default App;
