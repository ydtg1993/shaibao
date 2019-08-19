import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {Bg, Close, Input, ResetDialog, SubmitButton} from './style';
import bg from '../../../resource/dengluye/chongzhimima.png';
import close from '../../../resource/dengluye/guanbi.png';
import confirm from '../../../resource/dengluye/queding.png';
import * as Actions from "../store/actions";

class ResetComponent extends React.Component{
    render() {
        return (
            <ResetDialog className={this.props.show ? 'show fadeInUp faster animated':''}>
                <div>
                    <Bg src={bg}/>
                    <Close src={close} onClick={this.props.closeReset}/>
                </div>
                <div>
                    <Input>
                        <label htmlFor="reset-mobile">手机号</label>
                        <input name="reset-mobile" placeholder={'请输入您的手机号'} id="reset-mobile"/>
                    </Input>
                    <Input>
                        <label htmlFor="reset-verify">验证码</label>
                        <input className={'verify-input'} name="reset-verify" placeholder={'请输验证码'} id="reset-verify"/>
                        <button className={'verify-button'}>点击获取</button>
                    </Input>
                    <Input>
                        <label htmlFor="reset-password">新密码</label>
                        <input name="reset-password" type={'password'} placeholder={'请输入新密码'} id="reset-password"/>
                    </Input>
                    <Input>
                        <label htmlFor="reset-new-password">确认密码</label>
                        <input name="reset-new-password" type={'password'} placeholder={'请输入新密码'} id="reset-new-password"/>
                    </Input>
                    <SubmitButton src={confirm}/>
                </div>
            </ResetDialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeReset(){
            dispatch(Actions.CloseResetDialog())
        }
    }
};

export default connect(null, mapDispatchToProps)(ResetComponent)