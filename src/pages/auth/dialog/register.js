import React from 'react';
import {connect} from 'react-redux';
import * as Actions from "../store/actions";
import {DialogTop, RegisterTitle, DialogContent, Close, Input, RegisterDialog, SubmitButton} from "./style";
import Toast from "../../component/toast";
import {MongolianWrapper} from "../style";

class Register extends React.Component {
    componentWillReceiveProps(next) {
        if (next.sendVerify) {
            let interval = setInterval(() => this.props.resetVerifyEvent(interval), 60000);
        }
    }

    render() {
        const {visible} = this.props;
        return (
            <React.Fragment>
                <RegisterDialog className={visible ? 'show fadeInUp faster animated' : 'hidden'}>
                    <DialogTop>
                        <RegisterTitle/>
                        <Close onClick={this.props.CloseRegisterDialog}/>
                    </DialogTop>
                    <DialogContent>
                        <Input>
                            <label htmlFor="register-mobile">手机号</label>
                            <input name="register-mobile" placeholder={'请输入您的手机号'} ref={(input) => {
                                this.mobile = input
                            }} id="register-mobile"/>
                        </Input>
                        <Input>
                            <label htmlFor="register-verify">验证码</label>
                            <input className={'verify-input'} name="register-verify" placeholder={'请输验证码'}
                                   ref={(input) => {
                                       this.verify = input
                                   }} id="register-verify"/>
                            <button className={'verify-button'}
                                    onClick={() => this.props.sendVerifyCode(this.props.sendVerify, this.mobile)}>点击获取
                            </button>
                        </Input>
                        <Input>
                            <label htmlFor="register-password">密码</label>
                            <input name="register-password" type={'password'} placeholder={'请输入密码'} ref={(input) => {
                                this.password = input
                            }} id="register-password"/>
                        </Input>
                        <Input>
                            <label htmlFor="register-re-password">确认密码</label>
                            <input name="register-re-password" type={'password'} placeholder={'请输入密码'} ref={(input) => {
                                this.re_password = input
                            }} id="register-re-password"/>
                        </Input>
                        <Input>
                            <label htmlFor="invite">邀请码</label>
                            <input name="invite" placeholder={'请输入邀请码'} ref={(input) => {
                                this.invite = input
                            }} id="invite"/>
                        </Input>
                        <SubmitButton
                            onClick={() => this.props.register(this.mobile, this.password, this.re_password, this.verify, this.invite)}/>
                    </DialogContent>
                </RegisterDialog>
                <MongolianWrapper className={visible ? 'show fadeIn faster animated' : ''}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sendVerify: state.auth.get('sendVerify'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register(mobileElem, passwordElem, rePasswordElem, verifyElem, inviteElem) {
            let mobile = mobileElem.value;
            let password = passwordElem.value;
            let re_password = rePasswordElem.value;
            let verify = verifyElem.value;
            let invite = inviteElem.value;
            if (!(/^1[3456789]\d{9}$/.test(mobile))) {
                Toast.error('手机号错误', 1000);
                return false;
            }
            if (!(/^[a-zA-Z\d]+$/.test(password))) {
                Toast.error('密码只能数字或字母', 1000);
                return false;
            }
            if (password.length < 6 || password.length > 18) {
                Toast.error('密码6-18位', 1000);
                return false;
            }
            if (re_password !== password) {
                Toast.error('密码不一致', 1000);
                return false;
            }
            if (!(/^\d{4}$/.test(verify))) {
                Toast.error('验证码错误', 1000);
                return false;
            }
            dispatch(Actions.UserRegister(mobile, password, verify, invite));
        },
        sendVerifyCode(sendVerify, mobileElem) {
            if (sendVerify) {
                Toast.error('验证码已发送!', 1000);
                return false;
            }
            let mobile = mobileElem.value;
            if (!(/^1[3456789]\d{9}$/.test(mobile))) {
                Toast.error('手机号错误', 1000);
                return false;
            }
            dispatch(Actions.SendVerifyCode(mobile));
        },
        resetVerifyEvent(interval) {
            let action = Actions.ResetVerifyEvent();
            dispatch(action);
            clearInterval(interval);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);