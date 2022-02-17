import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.less';
import { myPkgs, RouterProps, useLocation, useNavigate } from 'plugin-runtime';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openKey, setOpenKey] = useState<string[]>([]);
  const [activeKey, setActiveKey] = useState<string>();
  const handleMenu = useCallback(
    (item: RouterProps) => {
      const isSubMenu = Array.isArray(item.children);

      if (!isSubMenu) {
        navigate(item.key);
      } else {
        const _openKey = [...openKey];
        const idx = _openKey.indexOf(item.key);

        if (idx === -1) {
          setOpenKey(_openKey.concat(item.key));
        } else {
          _openKey.splice(idx, 1);
          setOpenKey(_openKey);
        }
      }
    },
    [navigate, openKey]
  );

  const renderMenu = useCallback(
    (list?: RouterProps[]) => {
      return list?.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const md = require('@package/' + item.key + '/README.mdx');

        return (
          <nav
            key={item.key}
            className={[styles.item, activeKey === item.key && styles.active].join(' ')}
            onClick={() => handleMenu(item)}
          >
            <a>
              {md.basic?.title || item.path}
              {md.basic?.subtitle && <i>{md.basic.subtitle}</i>}
            </a>
            {renderMenu(item.children)}
          </nav>
        );
      });
    },
    [activeKey, handleMenu]
  );

  useEffect(() => {
    setActiveKey(location.pathname.substring(1));
  }, [location.pathname]);
  return (
    <aside className={styles.menu}>
      <div className={styles.title}>{'skyline'}</div>
      {renderMenu(myPkgs)}
    </aside>
  );
};

export default Menu;
