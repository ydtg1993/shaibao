import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {Bg, Close, Input, ResetDialog, SubmitButton} from './style';
import bg from '../../../resource/dengluye/chongzhimima.png';
import close from '../../../resource/dengluye/guanbi.png';
import confirm from '../../../resource/dengluye/queding.png';
import * as Actions from "../store/actions";
import Toast from "../../component/toast";

class ResetComponent extends React.Component{
    render() {
        return (
            <ResetDialog className={this.props.show ? 'show fadeInLeft faster animated':''}>
                <div>
                    <Bg src={bg}/>
                    <Close src={close} onClick={this.props.closeReset}/>
                </div>
                <div>
                    <Input>
                        <label htmlFor="reset-mobile">手机号</label>
                        <input name="reset-mobile" placeholder={'请输入您的手机号'} ref={(input)=>{this.mobile = input}} id="reset-mobile"/>
                    </Input>
                    <Input>
                        <label htmlFor="reset-verify">验证码</label>
                        <input className={'verify-input'} name="reset-verify" placeholder={'请输验证码'} ref={(input)=>{this.verify = input}} id="reset-verify"/>
                        <button className={'verify-button'}>点击获取</button>
                    </Input>
                    <Input>
                        <label htmlFor="reset-password">新密码</label>
                        <input name="reset-password" type={'password'} placeholder={'请输入新密码'} ref={(input)=>{this.password = input}} id="reset-password"/>
                    </Input>
                    <Input>
                        <label htmlFor="reset-new-password">确认密码</label>
                        <input name="reset-new-password" type={'password'} placeholder={'请输入新密码'} ref={(input)=>{this.re_password = input}} id="reset-new-password"/>
                    </Input>
                    <SubmitButton src={confirm} onClick={()=>this.props.reset(this.mobile,this.password,this.re_password,this.verify)}/>
                </div>
            </ResetDialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset(mobileElem,passwordElem,rePasswordElem,verifyElem){
            let mobile = mobileElem.value;
            let password = passwordElem.value;
            let re_password = rePasswordElem.value;
            let verify = verifyElem.value;
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
            dispatch(Actions.UserReset(mobile,password,verify))
        },
        closeReset(){
            dispatch(Actions.CloseResetDialog())
        }
    }
};

export default connect(null, mapDispatchToProps)(ResetComponent)