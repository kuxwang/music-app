import * as React from "react";
import { Outlet } from "react-router-dom";
import Nav from '../../components/nav'

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <>
      <Nav/>
      <Outlet />
    </>
  );
};

export default Layout;
