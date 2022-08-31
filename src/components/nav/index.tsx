import * as React from "react";
import { NavLink } from "react-router-dom";
import { WapNav, Search } from "@react-vant/icons";
import styles from "./nav.module.less";

interface INavProps {}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  const list: any[] = [
    {
      name: "我的",
      path: "home",
    },
    {
      name: "发现",
      path: "find",
    },
    {
      name: "朋友",
      path: "friend",
    },
    {
      name: "视频",
      path: "videos",
    },
  ];
  const getNavListClassName = (isActive: boolean) =>
    isActive ? "text-c0 flex-1" : "text-c9 flex-1";

  return (
    <nav className={"flex " + styles.nav}>
      <div className={"flex justify-center items-center " + styles.left}>
        <WapNav fontSize={16} />
      </div>
      <div className={"flex flex-1 px-18 " + styles.navlist}>
        {list.map((item) => (
          <NavLink
            key={item.path}
            className={({ isActive }) => getNavListClassName(isActive)}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className={"flex justify-center items-center " + styles.left}>
        <Search />
      </div>
    </nav>
  );
};

export default Nav;
