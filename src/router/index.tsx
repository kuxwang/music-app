import * as React from "react";
import { RouteObject } from "react-router-dom";

import Layout from '../pages/layout'
// import Home from "../pages/home";
const Login = React.lazy(() => import("../pages/login"));
const Find = React.lazy(() => import("../pages/find"));
const Friend = React.lazy(() => import("../pages/friend"));
const Home = React.lazy(() => import("../pages/home"));
const Videos = React.lazy(() => import("../pages/videos"));


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'find',
        element: <Find />
      },
      {
        path: 'friend',
        element: <Friend />
      },
      {
        path: 'videos',
        element: <Videos />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]


export default routes