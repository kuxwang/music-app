import * as React from 'react';
import styles from "./style.module.less";

const HomeIcon: React.FC<IHomeIconProps> = (props) => {
  return <div className={styles.homeIcon}>
      <div className={styles.icon}>
        <i className={[props.icon].join(' ')}></i>
      </div>
      <div className={styles.text}>{props.text}</div>
  </div>;
};

export default HomeIcon;