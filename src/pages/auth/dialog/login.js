import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import { Bg,Close,LoginDialog,Input,Reset,SubmitButton } from './style';
import bg from '../../../resource/dengluye/denglu.png';
import close from '../../../resource/dengluye/guanbi.png';
import confirm from '../../../resource/dengluye/queding.png';
import * as Actions from "../store/actions";
import Toast from '../../component/toast';
import {Redirect} from "react-router";

class Login extends React.Component{
    componentWillReceiveProps(nextProps){
        if(nextProps.userInfo){
            const cookies = new Cookies();
            cookies.set('userinfo', nextProps.userInfo, { path: '/' });
        }
    }

    render() {
        if(this.props.userInfo){
            return (
                (<Redirect to={{pathname: "/home"}}/>)
            )
        }
        return (
            <LoginDialog className={this.props.show ? 'show fadeInUp faster animated':'hidden'}>
                <div>
                    <Bg src={bg}/>
                    <Close src={close} onClick={this.props.closeLogin}/>
                </div>
                <div>
                    <Input>
                        <label htmlFor="mobile">手机号</label>
                        <input name="mobile" placeholder={'请输入您的手机号'} ref={(input)=>{this.mobile = input}} id="mobile"/>
                    </Input>
                    <Input>
                        <label htmlFor="password">密码</label>
                        <input name="password" type={'password'} placeholder={'请输入密码'} ref={(input)=>{this.password = input}} id="password"/>
                    </Input>
                    <Reset onClick={this.props.openReset}>忘记密码</Reset>
                    <SubmitButton onClick={()=>this.props.login(this.mobile,this.password)} src={confirm}/>
                </div>
            </LoginDialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.get('userInfo'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login(mobileElem,passwordElem){
            let mobile = mobileElem.value;
            let password = passwordElem.value;
            if(!(/^1[3456789]\d{9}$/.test(mobile))){
                Toast.error('手机号错误',1500);
                return false;
            }
            if(!(/^[a-zA-Z\d]+$/.test(password))){
                Toast.error('密码只能数字或字母',1500);
                return false;
            }
            if(password.length < 6 || password.length > 18){
                Toast.error('密码6-18位',1500);
                return false;
            }
            dispatch(Actions.UserLogin());
        },
        closeLogin() {
            dispatch(Actions.CloseLoginDialog())
        },
        openReset(){
            dispatch(Actions.OpenResetDialog())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)