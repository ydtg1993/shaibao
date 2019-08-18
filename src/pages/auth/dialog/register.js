import React from 'react';
import {connect} from 'react-redux';
import * as Actions from "../store/actions";
import {Close, Input, Bg, RegisterDialog, Reset, SubmitButton} from "./style";
import bg from "../../../resource/dengluye/zhucechuangkou.png";
import close from "../../../resource/dengluye/guanbi.png";
import confirm from "../../../resource/dengluye/queding.png";

class Register extends React.Component{
    render() {
        return (
            <RegisterDialog className={this.props.show ? 'show':'hidden'}>
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
                        <label htmlFor="verify">验证码</label>
                        <input name="verify" placeholder={'请输验证码'} id="verify"/>
                    </Input>
                    <Input>
                        <label htmlFor="password">密码</label>
                        <input name="password" placeholder={'请输入密码'} id="password"/>
                    </Input>
                    <Input>
                        <label htmlFor="re_password">确认密码</label>
                        <input name="re_password" placeholder={'请输入密码'} id="re_password"/>
                    </Input>
                    <Input>
                        <label htmlFor="invite">邀请码</label>
                        <input name="invite" placeholder={'请输邀请码'} id="invite"/>
                    </Input>
                    <SubmitButton src={confirm}/>
                </div>
            </RegisterDialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeLogin() {
            const action = Actions.CloseRegisterDialog();
            dispatch(action)
        }
    }
};

export default connect(null, mapDispatchToProps)(Register);