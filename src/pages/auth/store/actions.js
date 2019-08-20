import axios from 'axios';
import Toast from '../../component/toast';

export const USER_LOGIN = 'user_login';
export const USER_REGISTER = 'user_register';
export const OPEN_LOGIN_DIALOG = 'open_login_dialog';
export const OPEN_REGISTER_DIALOG = 'open_register_dialog';
export const CLOSE_LOGIN_DIALOG = 'close_login_dialog';
export const CLOSE_REGISTER_DIALOG = 'close_register_dialog';
export const OPEN_RESET_DIALOG = 'open_reset_dialog';
export const CLOSE_RESET_DIALOG = 'close_reset_dialog';
export const NOTICE_EVENT = 'notice_event';

export const UserLogin = (mobile,password) => {
    return (dispatch)=>{
        axios.get('/api/login.json').then((res)=>{
            let data = res.data;
            if(data.code == 20000){
                dispatch({
                   type:USER_LOGIN,
                   userInfo:{
                       id:data.data.serial,
                       username:data.data.name,
                       gold:data.data.gold,
                       avatar:data.data.avatar,
                       token:data.data.token
                   }
                });
                Toast.success('登录成功');
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};

export const UserRegister = () => ({
   type:USER_REGISTER
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

