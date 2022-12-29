import ScrollView from "components/common/ScrollView";
import React, { useEffect } from "react";
import {  homeIcons } from "getInfos/getData";
import HomeIcon from "components/home-icon";
import api from "api";


// accountFn

interface IHomeProps {}
const Home: React.FC<IHomeProps> = (props) => {
  useEffect(() => {
    api.accountFn().then((res: any) => {
      console.log('账号信息')
      console.log(res)
    })

  },[]);
  return <div>
    <ScrollView scrollX>
      {
        (homeIcons() as IHomeIconProps[]).map((i,index:number) => {
          return <HomeIcon {...i} key={i.text}></HomeIcon>
        })
      }
    </ScrollView>
  </div>;
};

export default Home;
