import React, { useEffect, useMemo, useRef, useState } from 'react';
import docs from '@app/docs';
import { Outlet, useLocation } from '@moneko/react';
import { type ColorScheme, ProviderElement, theme } from 'neko-ui';
import Colors from './components/colors';
import Coverage from './components/coverage';
import Footer from './components/footer';
import SandboxGroup from './components/sandbox-group';
import Sider from './components/sider';
import './global.css';
import log from '../CHANGELOG.md?raw';

function App() {
  const provider = useRef<ProviderElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const { isDark, scheme: orgScheme } = theme;
  const [scheme, setScheme] = useState(orgScheme());
  const location = useLocation();
  const active = useMemo(() => location.pathname.substring(1), [location.pathname]);
  const doc = useMemo(() => docs[active], [active]);

  useEffect(() => {
    box.current?.scrollTo({ top: 0, behavior: 'smooth' });
    provider.current?.addEventListener('scheme', (e: CustomEvent<keyof typeof ColorScheme>) => {
      setScheme(e.detail);
      document.documentElement.setAttribute('data-theme', theme.isDark() ? 'dark' : 'light');
    });
  }, []);

  return (
    <n-provider ref={provider}>
      <Sider scheme={scheme} />
      <main ref={box} className="site-doc-main">
        {!location.pathname.substring(1).startsWith('@moneko') ? <Coverage /> : null}
        <div className="site-page-view">
          <n-md
            css={`
              .n-md-body:has(n-md) {
                overflow: initial;
                padding: 0;
                background-color: transparent;
                box-shadow: unset;
                backdrop-filter: unset;
                margin-block-end: 0;
              }
            `}
            not-render
          >
            <div>
              <Outlet />
            </div>
          </n-md>
          <SandboxGroup name={active} />
          {doc.map((Item, i) => (
            <Item key={i} />
          ))}
          {!active && (
            <>
              <Colors />
              <n-md text={`[TOC]\n${log}`} />
            </>
          )}
        </div>
        <Footer />
      </main>
      <n-back-top
        css={`
          .back-top {
            position: fixed;
          }
        `}
      />
      {scheme === 'light' || !isDark() ? <div className="n-site-bg" /> : null}
    </n-provider>
  );
}

export default App;
