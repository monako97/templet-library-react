import './footer.css';
import React, { memo } from 'react';
import { name, repository, author } from '@app/info';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="n-site-footer">
      <p>
        <a
          className="n-site-footer-link"
          href={repository?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}&nbsp;
        </a>
        Ⓒ {year} Made with ❤️‍🔥 by&nbsp;
        <a
          className="n-site-footer-link"
          href={author?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author?.name}
        </a>
      </p>
    </footer>
  );
};

export default memo(Footer, () => true);
