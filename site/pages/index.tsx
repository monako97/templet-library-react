import React, { useEffect, useRef } from 'react';
import { projectBasicInfo, useLocation, useOutlet } from 'plugin-runtime';
import styles from './index.less';
import { ConfigProvider, BackTop } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import Sider from '../components/sider';
import Coverage from '@/components/coverage';

ConfigProvider.config(projectBasicInfo.providerConfig);

// const projectCoverage = projectBasicInfo.coverage[projectBasicInfo.programInfo.name] || {};

// type CoverageType = 'statements' | 'conditionals' | 'methods';
// const conf: Record<CoverageType, string> = {
//   statements: '语句覆盖率',
//   conditionals: '条件覆盖率',
//   methods: '函数覆盖率',
// };

const App: React.FC = () => {
  const box = useRef<HTMLElement>(null);
  const readme = useOutlet();
  const location = useLocation();

  // const coverage = useMemo(() => {
  //   const compCoverage = projectBasicInfo.coverage[location.pathname.substring(1)] || {};

  //   return readme === null ? projectCoverage : compCoverage;
  // }, [location.pathname, readme]);

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
              {/* <div className={styles.coverage}>
                {Object.keys(conf).map((k) => {
                  const cover = coverage[k],
                    covered = coverage[`covered${k}`],
                    coverNum = Math.round((covered / cover) * 100) || 0;

                  let stat = 'success';

                  if (coverNum < 80) {
                    stat = 'warning';
                  }
                  if (coverNum < 50) {
                    stat = 'error';
                  }

                  return (
                    <div key={k} className={`${styles.item} ${styles[stat]}`}>
                      <div className={styles.label}>{conf[k as CoverageType]}</div>
                      <div className={styles.value}>
                        {cover ? (
                          <React.Fragment>
                            <div>{coverNum}%</div>
                            <div>{`${cover} / ${covered}`}</div>
                          </React.Fragment>
                        ) : (
                          <strong>0%</strong>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div> */}
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
