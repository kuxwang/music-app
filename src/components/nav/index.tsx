import * as React from 'react';
import styles from './nav.module.less';

interface INavProps {
}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  return <div className={styles.nav}>
    nav
  </div>;
};

export default Nav;
