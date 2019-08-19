import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import { Bg,Close,LoginDialog,Input,Reset,SubmitButton } from './style';
import bg from '../../../resource/dengluye/denglu.png';
import close from '../../../resource/dengluye/guanbi.png';
import confirm from '../../../resource/dengluye/queding.png';
import * as Actions from "../store/actions";
import Toast from '../../component/toast';

class Login extends React.Component{
    tip(){
        Toast.error('网络异常',1500)
    }

    render() {
        return (
            <LoginDialog className={this.props.show ? 'show fadeInUp faster animated':'hidden'}>
                <div>
                    <Bg src={bg}/>
                    <Close src={close} onClick={this.props.closeLogin}/>
                </div>
                <div>
                    <Input>
                        <label htmlFor="mobile">手机号</label>
                        <input name="mobile" placeholder={'请输入您的手机号'} id="mobile"/>
                    </Input>
                    <Input>
                        <label htmlFor="password">密码</label>
                        <input name="password" type={'password'} placeholder={'请输入密码'} id="password"/>
                    </Input>
                    <Reset onClick={this.props.openReset}>忘记密码</Reset>
                    <SubmitButton onClick={this.tip.bind(this)} src={confirm}/>
                </div>
            </LoginDialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeLogin() {
            dispatch(Actions.CloseLoginDialog())
        },
        openReset(){
            dispatch(Actions.OpenResetDialog())
        }
    }
};

export default connect(null, mapDispatchToProps)(Login)