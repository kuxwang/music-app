import * as React from "react";
import Home from "../pages/home";
const Login = React.lazy(() => import("../pages/login"));


const routes: any[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
]


export default routes