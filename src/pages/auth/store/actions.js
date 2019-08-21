import axios from 'axios';
import Toast from '../../component/toast';

export const OPEN_LOGIN_DIALOG = 'open_login_dialog';
export const OPEN_REGISTER_DIALOG = 'open_register_dialog';
export const CLOSE_LOGIN_DIALOG = 'close_login_dialog';
export const CLOSE_REGISTER_DIALOG = 'close_register_dialog';
export const OPEN_RESET_DIALOG = 'open_reset_dialog';
export const CLOSE_RESET_DIALOG = 'close_reset_dialog';
export const SET_USER_INFO = 'set_user_info';
export const SEND_VERIFY_EVENT = 'send_verify_event';
export const RESET_VERIFY_EVENT = 'reset_verify_event';

export const SendVerifyCode = (mobile) => {
    return (dispatch)=>{
        axios.post('http://10.10.13.153:8000/api/player/client/send_code',{
            phone: mobile
        },{headers: {'Content-Type': 'application/json'}}).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                Toast.success('发送成功',1000);
                dispatch(SendVerifyEvent());
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};

export const UserRegister = (mobile,password,verify,invite) => {
    return (dispatch)=>{
        axios.post('http://10.10.13.153:8000/api/player/client/registered',{
            phone: mobile,
            password: password,
            code:verify,
            invite_code:invite
        },{headers: {'Content-Type': 'application/json'}}).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                dispatch(SetUserInfo({
                    id:data.data.serial,
                    username:data.data.name,
                    gold:data.data.gold,
                    avatar:data.data.avatar,
                    token:data.data.token
                }));
                Toast.success('注册成功',1000);
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};

export const UserLogin = (mobile,password) => {
    return (dispatch)=>{
        axios.post('http://10.10.13.153:8000/api/player/client/login',{
            phone: mobile,
            password: password
        },{headers: {'Content-Type': 'application/json'}}).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                dispatch(SetUserInfo({
                    id:data.data.serial,
                    username:data.data.name,
                    gold:data.data.gold,
                    avatar:data.data.avatar,
                    token:data.data.token
                }));
                Toast.success('登录成功',1000);
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};

export const UserReset = (mobile,password,verify) => {
    return (dispatch)=>{
        axios.post('http://10.10.13.153:8000/api/player/client/reset_password',{
            phone: mobile,
            code:verify,
            password: password
        },{headers: {'Content-Type': 'application/json'}}).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                dispatch(SetUserInfo({
                    id:data.data.serial,
                    username:data.data.name,
                    gold:data.data.gold,
                    avatar:data.data.avatar,
                    token:data.data.token
                }));
                Toast.success('重置密码成功',1000);
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};

export const SetUserInfo = (userInfo) => ({
    type:SET_USER_INFO,
    userInfo:userInfo
});

export const OpenLoginDialog = ()=>({
    type:OPEN_LOGIN_DIALOG
});

export const OpenRegisterDialog = ()=>({
    type:OPEN_REGISTER_DIALOG
});

export const CloseLoginDialog = () => ({
    type:CLOSE_LOGIN_DIALOG
});

export const CloseRegisterDialog = () => ({
    type:CLOSE_REGISTER_DIALOG
});

export const OpenResetDialog = () => ({
    type:OPEN_RESET_DIALOG
});

export const CloseResetDialog = () => ({
    type:CLOSE_RESET_DIALOG
});

export const SendVerifyEvent = () => ({
    type:SEND_VERIFY_EVENT
});

export const ResetVerifyEvent = () =>({
    type:RESET_VERIFY_EVENT
});

