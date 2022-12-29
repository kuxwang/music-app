import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "components/common/Container";
import { Cell, Input, Button, Toast, hooks } from "react-vant";
import { useCountDown,useBoolean } from "ahooks";
import api from "api";


interface ILoginProps {}

const CodeBtn = (props:any) => {
  const [targetDate, setTargetDate] = useState<number>();
  const [countdown] = useCountDown({
    leftTime: targetDate,
    onEnd: () => {
      setTargetDate(undefined);
      props.onEnd();
    },
  });

  const sendCode = () => {
    setTargetDate(6000);
    props.onClick()
  };

  return (
    <Button
      className="border-none"
      onClick={() => sendCode()}
      size="small"
      disabled={countdown !== 0}
    >
      {countdown === 0 ? "获取验证码" : `${Math.round(countdown / 1000)}S`}
    </Button>
  );
};



// export const sendVerify = api + '/captcha/sent' // 发送验证码
// export const verify = api + '/captcha/verify' // 验证验证码
const Login: React.FC<ILoginProps> = () => {
  const navigate = useNavigate();
  
  const [isSend, { setTrue:setIsSendTrue }] = useBoolean(false);
  const [state, updateState] = hooks.useSetState<{mobile:any,captcha: any,loginInfo:any}>({
    mobile: "",
    captcha: "",
    loginInfo:''
  });
  const btnProps = {
    onClick: () => {
      setIsSendTrue()
      api.sendVerifyFn(state.mobile as number).then((res: any) => {
        if(res.data.code !== 200){
          Toast('获取验证码失败')
        }
      });

    },
    onEnd: () =>{
   
    },
  }


  const onSubmit = () =>{
    // 1. 验证是否获取验证码
    // 2. 验证手机号验证码合法性
    // 3. 保存登陆状态
    // if(!isSend){
    //   Toast('请先获取验证码')
    //   return
    // }
    if(!state.mobile){
      Toast('请输入手机号')
      return
    }
    // phoneLoginFn
    const params = {
      mobile: state.mobile,
      password: state.captcha,
      timestamp: new Date().getTime(),
    }

    api.phoneLoginFn(params).then((res: any) => {
      Toast('登陆成功')
      navigate('/')
    })

  }


  return (
    <>
      <Container>
        <div className="m-12 p-12 border border-gray-200 border-solid">
          <Cell className="mb-8">
            <Input
              value={state.mobile}
              onChange={(mobile) => updateState({ mobile })}
              placeholder="请输入手机号"
            />
          </Cell>
          <Cell className="mb-8">
            <Input
              value={state.captcha}
              type="tel"
              onChange={(captcha) => updateState({ captcha })}
              placeholder="请输入验证码"
              suffix={<CodeBtn {...btnProps} />}
            />
          </Cell>
          <Button size="large" round type="primary" color="#dd001b" onClick={() => onSubmit()}>
            登陆
          </Button>
          <span>登陆信息{JSON.stringify(state.loginInfo)}</span>
        </div>
      </Container>
    </>
  );
};

export default Login;
