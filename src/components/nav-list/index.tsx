import * as React from 'react';
import styles from "./style.module.less";

interface INavItemProps {
  icon: string;
  text: string;
  linkTo: string;
}
type INavListProps = {
  list: INavItemProps[]
}

const NavItem: React.FC<INavItemProps> = (props) => {
  return <div className={styles.navItem}>
      <div className={styles.icon}>
        <i className={[props.icon].join(' ')}></i>
      </div>
      <div className={styles.text}>{props.text}</div>
  </div>;
};


const NavList: React.FC<INavListProps> = (props) => {
  return <div className={styles.navList + " flex"}>
    { 
      props.list.map(item => (<NavItem {...item} key={item.icon} />))
    }
  </div>
}


export default NavList;
