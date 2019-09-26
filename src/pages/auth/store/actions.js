import axios from 'axios';
import Cookies from 'universal-cookie';
import Toast from '../../component/toast';
import {Host} from "../../../index";
import store from "../../../store";

export const SET_USER_INFO = 'set_user_info';
export const CLEAR_USER_INFO = 'clear_user_info';
export const SEND_VERIFY_EVENT = 'send_verify_event';
export const RESET_VERIFY_EVENT = 'reset_verify_event';

export const SET_PLAYER_POSITION = 'set_player_position';
export const PLAYER_GOLD_CHANGE = 'player_gold_change';

export const POSITION_AUTH = 'Auth';
export const POSITION_HOME = 'Hall';
export const POSITION_ROOM_FAST = 'Fast';
export const POSITION_ROOM_ONE = 'OneMinute';
export const POSITION_ROOM_FIVE = 'FivesMinute';

const ajaxConfig = {headers: {'Content-Type': 'application/json'},timeout: 1500};

export const GetPlayerInfo = (token)=>{
    return (dispatch)=>{
        let ajaxConfig = {headers: {'Content-Type': 'application/json','Authorization':'Token '+token},timeout: 3000};
        axios.post(Host+'three/player/player/player_info',{},ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                let userInfo = store.getState().auth.get('userInfo');
                if(JSON.stringify(userInfo) !== JSON.stringify(data.data)){
                    const cookies = new Cookies();
                    let info = cookies.get('userinfo');

                    let userinfo = {
                        id:data.data.serial,
                        username:data.data.name,
                        gold:data.data.gold,
                        avatar:data.data.avatar,
                        token:data.data.token,
                        expires:info.expires
                    };
                    dispatch(SetUserInfo(userinfo));
                    cookies.set('userinfo', userinfo, { path: '/',expires: new Date(info.expires)});
                }
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
            Toast.error('服务器开小差了',1000);
        });
    }
};

export const SendVerifyCode = (mobile) => {
    return (dispatch)=>{
        axios.post(Host+'auth/client/send_code',{
            phone: mobile
        },ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                Toast.success('发送成功',1000);
                dispatch(SendVerifyEvent());
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
            Toast.error('服务器开小差了',1000);
        });
    }
};

export const UserRegister = (mobile,password,verify,invite) => {
    return (dispatch)=>{
        axios.post(Host+'auth/client/registered',{
            phone: mobile,
            password: password,
            code:verify,
            invite_code:invite
        },ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                let expires = new Date(Date.now()+600000000);
                let userinfo = {
                    id:data.data.serial,
                    username:data.data.name,
                    gold:data.data.gold,
                    avatar:data.data.avatar,
                    token:data.data.token,
                    expires:expires
                };
                dispatch(SetUserInfo(userinfo));
                Toast.success('注册成功',1000);
                const cookies = new Cookies();
                cookies.set('userinfo', userinfo, { path: '/',expires: expires});
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
            Toast.error('服务器开小差了',1000);
        });
    }
};

export const UserLogin = (mobile,password) => {
    return (dispatch)=>{
        axios.post(Host+'auth/client/login',{
            phone: mobile,
            password: password
        },ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                let expires = new Date(Date.now()+600000000);
                let userinfo = {
                    id:data.data.serial,
                    username:data.data.name,
                    gold:data.data.gold,
                    avatar:data.data.avatar,
                    token:data.data.token,
                    expires:expires
                };
                dispatch(SetUserInfo(userinfo));
                Toast.success('登录成功',1000);
                const cookies = new Cookies();
                cookies.set('userinfo', userinfo, { path: '/',expires: expires});
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            Toast.error('服务器开小差了',1000);
        });
    }
};

export const UserReset = (mobile,password,verify) => {
    return (dispatch)=>{
        axios.post(Host+'auth/client/reset_password',{
            phone: mobile,
            code:verify,
            password: password
        },ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                let expires = new Date(Date.now()+600000000);
                let userinfo = {
                    id:data.data.serial,
                    username:data.data.name,
                    gold:parseFloat(data.data.gold),
                    avatar:data.data.avatar,
                    token:data.data.token,
                    expires:expires
                };
                dispatch(SetUserInfo(userinfo));
                Toast.success('重置密码成功',1000);
                const cookies = new Cookies();
                cookies.set('userinfo', userinfo, { path: '/',expires: expires});
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            Toast.error('服务器开小差了',1000);
        });
    }
};

export const ClearUserInfo = ()=>{
    return (dispatch)=>{
        const cookies = new Cookies();
        cookies.remove('userinfo', { path: '/' });
        dispatch({
            type:CLEAR_USER_INFO
        })
    }
};

export const SetUserInfo = (userInfo) => ({
    type:SET_USER_INFO,
    userInfo:userInfo
});

export const SendVerifyEvent = () => ({
    type:SEND_VERIFY_EVENT
});

export const ResetVerifyEvent = () =>({
    type:RESET_VERIFY_EVENT
});

export const PlayerGoldChange = (gold) =>({
    type:PLAYER_GOLD_CHANGE,
    gold
});

export const SetPlayerPosition = (position) => ({
    type:SET_PLAYER_POSITION,
    position
});

