import * as React from 'react';
import styles from "./style.module.less";

const NavItem: React.FC<INavItemProps> = (props) => {
  return <div className={styles.navItem}>
      <div className={styles.icon}>
        <i className={[props.icon].join(' ')}></i>
      </div>
      <div className={styles.text}>{props.text}</div>
  </div>;
};


export default NavItem;