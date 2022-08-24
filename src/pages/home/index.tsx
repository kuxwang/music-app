import React, { useEffect } from "react";
import axios from "../../api/index";
import { Button } from 'react-vant';
interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  useEffect(() => {
    console.log('run')
    axios.get("/banner?type=2").then((res: any) => {
      console.log(res);
    });
  },[]);
  return <div>
    home
    <div className="grid grid-cols-3 gap-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
    <Button type='primary'>Primary</Button>


  </div>;
};

export default Home;
