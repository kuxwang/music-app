import ScrollView from "components/common/ScrollView";
import React, { useEffect } from "react";
import {  homeIcons } from "getInfos/getData";
import HomeIcon from "components/home-icon";
import api from "api";
import { fetchUser } from "store/slice/userSlice";
import { useDispatch,useSelector } from "react-redux";

// accountFn

interface IHomeProps {}
const Home:  React.FC<IHomeProps> = (props) => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => (state as any).user.account)

  useEffect(() => {
    console.log('1111')
    dispatch(fetchUser()).then((res: any)=>{
      console.log('112eee')
      console.log(res)
    })
    // api.refreshFn()
  },[]);
  return <div>
    <ScrollView scrollX>
      {
        (homeIcons() as IHomeIconProps[]).map((i,index:number) => {
          return <HomeIcon {...i} key={i.text}></HomeIcon>
        })
      }
    </ScrollView>
    
    <div>{JSON.stringify(userInfo)}</div>
  </div>;
};

export default  Home;
