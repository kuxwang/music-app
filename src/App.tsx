import React from 'react';
import './App.less';
import {  useRoutes } from "react-router-dom";
import routes from './router'

function App() {
  const element = useRoutes(routes) 
  return element;
}

export default App;
