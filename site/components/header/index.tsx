import React from 'react';
import styles from './index.less';

const Header = () => {
  const handleTheme = () => {
    const theme = document.body.getAttribute('data-theme');

    document.body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={styles.header}>
      <button onClick={handleTheme}>Light</button>
    </header>
  );
};

export default Header;
