import React from 'react';
import { LoginBg,Close,LoginDialog,Input,Reset,SubmitButton } from './style';
import lbg from '../../../resource/dengluye/denglu.png';
import close from '../../../resource/dengluye/guanbi.png';
import confirm from '../../../resource/dengluye/queding.png';

class Login extends React.Component{
    render() {
        return (
            <LoginDialog className={this.props.show ? 'show':'hidden'}>
                <div>
                    <LoginBg src={lbg}/>
                    <Close src={close}/>
                </div>
                <div>
                    <Input>
                        <label htmlFor="mobile">手机号</label>
                        <input name="mobile" placeholder={'请输入您的手机号'} id="mobile"/>
                    </Input>
                    <Input>
                        <label htmlFor="password">密码</label>
                        <input name="password" placeholder={'请输入密码'} id="password"/>
                    </Input>
                    <Reset>充值密码</Reset>
                    <SubmitButton src={confirm}/>
                </div>
            </LoginDialog>
        );
    }
}

export default Login;