import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import { DialogTop,LoginTitle,DialogContent,Close,LoginDialog,Input,Reset,SubmitButton} from './style';
import * as Actions from "../store/actions";
import Toast from '../../component/toast';

class Login extends React.Component{
    render() {
        const {visible} = this.props;
        return (
            <LoginDialog className={visible ? 'show fadeInUp faster animated':'hidden'}>
                <DialogTop>
                    <LoginTitle/>
                    <Close onClick={this.props.CloseLoginDialog}/>
                </DialogTop>
                <DialogContent>
                    <Input>
                        <label htmlFor="mobile">手机号</label>
                        <input name="mobile" placeholder={'请输入您的手机号'} ref={(input)=>{this.mobile = input}} id="mobile"/>
                    </Input>
                    <Input>
                        <label htmlFor="password">密码</label>
                        <input name="password" type={'password'} placeholder={'请输入密码'} ref={(input)=>{this.password = input}} id="password"/>
                    </Input>
                    <Reset onClick={this.props.OpenResetDialog}>忘记密码</Reset>
                    <SubmitButton onClick={()=>this.props.login(this.mobile,this.password)}/>
                </DialogContent>
            </LoginDialog>
        );
    }
}

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
            dispatch(Actions.UserLogin(mobile,password));
        }
    }
};

export default connect(null, mapDispatchToProps)(withRouter(Login))