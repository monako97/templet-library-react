import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.less';
import { myPkgs, RouterProps, useLocation, useNavigate } from 'plugin-runtime';

type MenuType = {
  subtitle?: string;
  key: string;
  title: string;
  path: string;
};

const menuObj: Record<string, MenuType[]> = {};

const extractMenu = (list: RouterProps[]) => {
  return list?.map((item) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const md = require('@pkg/' + item.key + '/README.mdx');
    const type = md.basic.type || 'default';
    const prev = menuObj[type] || [];

    Object.assign(menuObj, {
      [type]: prev.concat({
        ...md.basic,
        path: item.path,
        key: item.key,
      }),
    });
  });
};

extractMenu(myPkgs);

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
    (list?: MenuType[]) => {
      return list?.map((item) => {
        return (
          <nav
            key={item.key}
            className={[styles.item, activeKey === item.key && styles.active].join(' ')}
            onClick={() => handleMenu(item)}
          >
            <a>
              {item.title || item.path}
              {item.subtitle && <i>{item.subtitle}</i>}
            </a>
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
      <div className={styles.title}>{projectName.replace('-', ' ')}</div>
      {Object.keys(menuObj).map((key) => {
        return (
          <div key={key}>
            <h5 className={styles.group}>{key}</h5>
            {renderMenu(menuObj[key])}
          </div>
        );
      })}
    </aside>
  );
};

export default Menu;
