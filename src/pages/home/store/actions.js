import axios from 'axios';
import Toast from "../../component/toast";

let host = 'http://10.10.13.153:8000/';
let ajaxConfig = {headers: {'Content-Type': 'application/json','Authorization':'Token'},timeout: 1000};

export const GET_EMAIL_LIST = 'get_email_list';
export const GET_RANK_LIST = 'get_rank_list';
export const GET_MAIL_INFO = 'get_mail_info';

export const getEmailList = (user_id,page) => {
    return (dispatch)=>{
        /*axios.post(host+'api/mail/client/list',{
            player_id:user_id,
            current_page:page,
            page_size:20
        },ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                dispatch({
                    type:GET_EMAIL_LIST,
                    data:data.data
                });
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
            Toast.error('服务器开小差了',1000);
        });*/
        dispatch({
            type:GET_EMAIL_LIST,
            list:[
                {
                    "id": 1,
                    "type": "系统消息",
                    "title": "vip充值回馈",
                    "create_at": "2019/08/10 12:00:00",
                    "read": true
                },
                {
                    "id": 2,
                    "type": "系统消息",
                    "title": "vip充值回馈",
                    "create_at": "2019/08/10 12:00:00",
                    "read": false
                }
            ]
        });
    }
};

export const ReadEmail = (mail_id,user_id)=>{
    return (dispatch)=>{
        /*axios.post(host+'api/mail/client/info',{
            player_id:user_id,
            mail_id:mail_id
        },ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                dispatch({
                    type:GET_MAIL_INFO,
                    data:data.data
                });
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
            Toast.error('服务器开小差了',1000);
        });*/
        dispatch({
            type:GET_MAIL_INFO,
            data:"<h3>hello hikki</h3>"
        });
    }
};

export const getRankList = (user_id,page)=>{
    return (dispatch)=>{
        /*axios.post(host+'api/player/client/leader_board',{
            player_id:user_id,
            current_page:page,
            page_size:20
        },ajaxConfig).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                dispatch({
                    type:GET_RANK_LIST,
                    list:data.data
                });
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
            Toast.error('服务器开小差了',1000);
        });*/
        dispatch({
            type:GET_RANK_LIST,
            list:{
                "ls": [
                    {
                        "ranking": 1,
                        "name": "孙坚",
                        "profit": 12345
                    },
                    {
                        "ranking": 2,
                        "name": "孙策",
                        "profit": 12345.88
                    },
                    {
                        "ranking": 3,
                        "name": "孙权",
                        "profit": 1245.88
                    },
                    {
                        "ranking": 4,
                        "name": "孙1权2",
                        "profit": 1245.88
                    },
                    {
                        "ranking": 5,
                        "name": "孙4权2",
                        "profit": 1245.88
                    },
                    {
                        "ranking": 6,
                        "name": "孙坚6",
                        "profit": 12345
                    },
                    {
                        "ranking": 7,
                        "name": "孙策7",
                        "profit": 12345.88
                    },
                    {
                        "ranking": 8,
                        "name": "孙权8",
                        "profit": 1245.88
                    },
                    {
                        "ranking": 9,
                        "name": "孙1权9",
                        "profit": 1245.88
                    },
                    {
                        "ranking": 10,
                        "name": "孙4权12",
                        "profit": 1245.88
                    }
                ],
                "own": {
                    "ranking": 3,
                    "name": "孙权",
                    "profit": 1245.88
                },
                "total": 20
            }
        });
    }
};



