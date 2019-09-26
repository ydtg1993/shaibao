import axios from 'axios';
import Toast from "../../component/toast";
import Cookies from "universal-cookie";
import {Host} from "../../../index";
import {ClearUserInfo, PlayerGoldChange} from "../../auth/store/actions";
import ReactDOM from "react-dom";
import CongratulationsComponent from "../dialog/signin/congratulations";
import React from "react";
import store from "../../../store";

const ajaxHeaders = function () {
    const cookies = new Cookies();
    const userinfo = cookies.get('userinfo');
    let token = userinfo ? userinfo.token : '';
    let ajaxConfig = {headers: {'Content-Type': 'application/json', 'Authorization': 'Token ' + token}, timeout: 3000};
    return ajaxConfig;
};
export const SET_REQUEST_LOCK = 'set_request_lock';
export const GET_ANNOUNCEMENT_LIST = 'get_announcement_list';
export const GET_EMAIL_LIST = 'get_email_list';
export const ADD_EMAIL_LIST = 'add_email_list';
export const GET_RANK_LIST = 'get_rank_list';
export const GET_MAIL_INFO = 'get_mail_info';
export const GET_BET_RECORD_LIST = 'get_bet_record_list';
export const ADD_BET_RECORD_LIST = 'add_bet_record_list';
export const GET_ACTIVITY_LIST = 'get_activity_list';
export const GET_SIGNIN_LIST = 'get_signin_list';

export const PlayerSignIn = (day) => {
    return (dispatch) => {
        axios.post(Host + 'three/sign/sign/sign', {}, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                let list = JSON.parse(store.getState().home.get('signInList'));
                if (list[day]) {
                    list[day].is_sign = true;
                    list[day].allow = false;
                }
                dispatch({
                    type: GET_SIGNIN_LIST,
                    list
                });

                const div = document.createElement('div');
                document.body.appendChild(div);
                ReactDOM.render(<CongratulationsComponent coin={data.data.value}/>, div);
                setInterval(function () {
                    ReactDOM.unmountComponentAtNode(div);
                }, 2000);

                let gold = store.getState().auth.get('gold') + parseFloat(data.data.value);
                dispatch(PlayerGoldChange(gold));
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const GetAnnouncementList = () => {
    return (dispatch) => {
        axios.post(Host + 'three/announcement/notice/search', {}, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                dispatch({
                    type: GET_ANNOUNCEMENT_LIST,
                    list: data.data
                });
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const GetEmailList = (page) => {
    return (dispatch) => {
        axios.post(Host + 'three/mail/mail/list', {
            current_page: page,
            page_size: 15
        }, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                if (page > 1) {
                    dispatch({
                        type: ADD_EMAIL_LIST,
                        list: data.data.ls
                    });
                    return;
                }
                dispatch({
                    type: GET_EMAIL_LIST,
                    list: data.data.ls
                });
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const ReadEmail = (mail_id) => {
    return (dispatch) => {
        axios.post(Host + 'three/mail/mail/info', {
            obj_id: mail_id
        }, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                dispatch({
                    type: GET_MAIL_INFO,
                    data: data.data
                });
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const DeleteMail = (mail_id) => {
    return (dispatch) => {
        axios.post(Host + 'three/mail/mail/delete_mail', {
            obj_id: mail_id
        }, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                Toast.success('删除成功');
                let dom = document.getElementById(`email_id_${mail_id}`);
                if (dom) {
                    dom.parentNode.removeChild(dom)
                }
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const ReceiveCoin = (mail_id) => {
    return (dispatch) => {
        axios.post(Host + 'three/mail/mail/receive', {
            obj_id: mail_id
        }, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                Toast.success('领取成功');
                let dom = document.getElementById(`email_id_${mail_id}`);
                if (dom) {
                    dom.parentNode.removeChild(dom)
                }
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const GetRankList = (page) => {
    return (dispatch) => {
        axios.post(Host + 'three/player/player/leader_board', {
            current_page: page,
            page_size: 30
        }, ajaxHeaders()).then((res) => {
            let data = res.data;

            if (data.code === 20000) {
                dispatch({
                    type: GET_RANK_LIST,
                    list: data.data
                });
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const GetBetRecord = (page, type) => {
    return (dispatch) => {
        axios.post(Host + 'three/player/bet/bet_record', {
            current_page: page,
            types: type,
            page_size: 30
        }, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                if (page > 1) {
                    dispatch({
                        type: ADD_BET_RECORD_LIST,
                        list: data.data
                    });
                    return
                }
                dispatch({
                    type: GET_BET_RECORD_LIST,
                    list: data.data
                });
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const GetActivityList = () => {
    return (dispatch) => {
        axios.post(Host + 'three/announcement/drive/search', {}, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                dispatch({
                    type: GET_ACTIVITY_LIST,
                    list: data.data
                });
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const GetSignInList = () => {
    return (dispatch) => {
        axios.post(Host + 'three/sign/reward/search', {}, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                dispatch({
                    type: GET_SIGNIN_LIST,
                    list: data.data
                });
            } else if (data.code === 40001) {
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const SetRequestLock = (bool) => ({
    type: SET_REQUEST_LOCK,
    bool
});



