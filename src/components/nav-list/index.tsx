import * as React from "react";
import styles from "./style.module.less";
import NavItem from "../nav-item";

const NavList: React.FC<INavListProps> = (props) => {
  return (
    <div className={styles.navList + " flex"}>
      {props.list.map((item) => (
        <NavItem {...item} key={item.icon} />
      ))}
    </div>
  );
};
export default NavList;
