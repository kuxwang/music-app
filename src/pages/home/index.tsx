import React, { useEffect } from "react";
import axios from "../../api/index";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  useEffect(() => {
    console.log('run')
    axios.get("/banner?type=2").then((res: any) => {
      console.log(res);
    });
  },[]);

  return <div>home</div>;
};

export default Home;
