import React from 'react';
import {connect} from 'react-redux';
import * as Actions from "../store/actions";
import {Close, Input, Bg, RegisterDialog, SubmitButton} from "./style";
import bg from "../../../resource/dengluye/zhucechuangkou.png";
import close from "../../../resource/dengluye/guanbi.png";
import confirm from "../../../resource/dengluye/queding.png";
import Toast from "../../component/toast";

class Register extends React.Component{
    render() {
        return (
            <RegisterDialog className={this.props.show ? 'show fadeInUp faster animated':'hidden'}>
                <div>
                    <Bg src={bg}/>
                    <Close src={close} onClick={this.props.closeRegister}/>
                </div>
                <div>
                    <Input>
                        <label htmlFor="register-mobile">手机号</label>
                        <input name="register-mobile" placeholder={'请输入您的手机号'} ref={(input)=>{this.mobile = input}} id="register-mobile"/>
                    </Input>
                    <Input>
                        <label htmlFor="register-verify">验证码</label>
                        <input className={'verify-input'} name="register-verify" placeholder={'请输验证码'} ref={(input)=>{this.verify = input}} id="register-verify"/>
                        <button className={'verify-button'}>点击获取</button>
                    </Input>
                    <Input>
                        <label htmlFor="register-password">密码</label>
                        <input name="register-password" type={'password'} placeholder={'请输入密码'} ref={(input)=>{this.password = input}} id="register-password"/>
                    </Input>
                    <Input>
                        <label htmlFor="register-re-password">确认密码</label>
                        <input name="register-re-password" type={'password'} placeholder={'请输入密码'} ref={(input)=>{this.re_password = input}} id="register-re-password"/>
                    </Input>
                    <Input>
                        <label htmlFor="invite">邀请码</label>
                        <input name="invite" placeholder={'请输入邀请码'} ref={(input)=>{this.invite = input}} id="invite"/>
                    </Input>
                    <SubmitButton src={confirm} onClick={()=>this.props.register(this.mobile,this.password,this.re_password,this.verify,this.invite)} />
                </div>
            </RegisterDialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register(mobileElem,passwordElem,rePasswordElem,verifyElem,inviteElem){
            let mobile = mobileElem.value;
            let password = passwordElem.value;
            let re_password = rePasswordElem.value;
            let verify = verifyElem.value;
            let invite = inviteElem.value;
            if(!(/^1[3456789]\d{9}$/.test(mobile))){
                Toast.error('手机号错误',1000);
                return false;
            }
            if(!(/^[a-zA-Z\d]+$/.test(password))){
                Toast.error('密码只能数字或字母',1000);
                return false;
            }
            if(password.length < 6 || password.length > 18){
                Toast.error('密码6-18位',1000);
                return false;
            }
            if(re_password != password){
                Toast.error('密码不一致',1000);
                return false;
            }
            if(!(/^\d{4}$/.test(verify))){
                Toast.error('验证码错误',1000);
                return false;
            }
            dispatch(Actions.UserRegister(mobile,password,verify,invite));
        },
        closeRegister() {
            const action = Actions.CloseRegisterDialog();
            dispatch(action)
        }
    }
};

export default connect(null, mapDispatchToProps)(Register);