import * as React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Nav from "components/nav";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  let location = useLocation();
  console.log(location);
  console.log(location.pathname === "/");
  return (
    <>
      {location.pathname === "/" ? (
        <Navigate to="/find" replace={true} />
      ) : null}
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
