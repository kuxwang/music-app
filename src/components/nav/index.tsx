import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Popup, PopupPosition } from "react-vant";
import { WapNav, Search } from "@react-vant/icons";
import styles from "./nav.module.less";

import LoginMenu from "../login-menu";

interface INavProps {}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  const [popupState, setPopupState] = useState<PopupPosition>("");
  const onClose = () => setPopupState("");

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
    <>
      <nav className={"flex " + styles.nav}>
        <div className={"flex justify-center items-center " + styles.left}>
          <WapNav fontSize={16} onClick={() => setPopupState("left")} />
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
      <Popup
        visible={popupState === "left"}
        style={{ width: "315px", height: "100%" }}
        position="left"
        onClose={onClose}
      >
        <LoginMenu></LoginMenu>
      </Popup>
    </>
  );
};

export default Nav;
