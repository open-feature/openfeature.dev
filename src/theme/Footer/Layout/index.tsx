import clsx from 'clsx';
import React from 'react';
import CncfIconWhite from '../../../../static/img/cncf-white.svg';

/**
 * Swizzled FooterLayout component to include CNCF logo
 * See: https://docusaurus.io/docs/swizzling#swizzling-process
 */
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            <CncfIconWhite style={{ width: 300 }} />
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
