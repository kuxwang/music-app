import * as React from "react";
import { Button, Cell, Grid } from "react-vant";
import { NavigateFunction, useNavigate } from "react-router-dom";

import {
  ShopO,
  EnvelopO,
  FriendsO,
  MusicO,
  LocationO,
  FireO,
} from "@react-vant/icons";

import "./style.less";

interface ILoginMenuProps {}

const LoginMenu: React.FunctionComponent<ILoginMenuProps> = (props) => {
  const navigate:NavigateFunction = useNavigate();

  return (
    <div className="login-menu relative">
      <div className="no-login flex justify-center items-center flex-col">
        <div className="text-12 text-c6 text-center">
          <p>登陆网易云音乐</p>
          <p>手机电脑多端同步，尽享海量高品质音乐</p>
        </div>
        <Button round color="#00000066" size="small" plain onClick={() => navigate('/login')}>
          立即登陆
        </Button>
      </div>
      <Grid border={false}>
        <Grid.Item iconColor="#dd001b" icon={<EnvelopO />} text="我的消息" />
        <Grid.Item iconColor="#dd001b" icon={<FriendsO />} text="我的好友" />
        <Grid.Item iconColor="#dd001b" icon={<ShopO />} text="个性皮肤" />
        <Grid.Item iconColor="#dd001b" icon={<MusicO />} text="听歌识曲" />
      </Grid>

      <div className='mb-50'>
        <Cell title="演出" icon={<LocationO />} />
        <Cell title="商城" icon={<FireO />} />
        <Cell title="附近的人" icon={<LocationO />} />
        <Cell title="口袋铃声" icon={<FireO />} />
        <Cell title="我的订单" icon={<LocationO />} />
        <Cell title="定时停止播放" icon={<FireO />} />
        <Cell title="扫一扫" icon={<LocationO />} />
        <Cell title="音乐闹钟" icon={<FireO />} />
        <Cell title="在线听歌免流量" icon={<LocationO />} />
        <Cell title="游戏推荐" icon={<FireO />} />
        <Cell title="优惠券" icon={<LocationO />} />
        <Cell title="我要直播" icon={<FireO />} />
      </div>
      <div className='fixed login-menu-footer'>
        <Grid direction="horizontal" columnNum={3} border={false}>
          <Grid.Item icon={<ShopO />} text="夜间模式" />
          <Grid.Item icon={<ShopO />} text="设置" />
          <Grid.Item icon={<ShopO />} text="退出" />
        </Grid>
      </div>
    </div>
  );
};

export default LoginMenu;