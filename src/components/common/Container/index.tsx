import * as React from 'react';
import { NavBar, Toast } from 'react-vant';
interface IContainerProps {
  children?: React.ReactNode;

}

const Container: React.FunctionComponent<IContainerProps> = (props) => {
  return <div>
     <NavBar
      title="登陆"
      leftText="返回"
      rightText="注册"
      onClickLeft={() => Toast('返回')}
      onClickRight={() => Toast('按钮')}
    />
    <div>
      { props.children }
    </div>
  </div>;
};

export default Container;
