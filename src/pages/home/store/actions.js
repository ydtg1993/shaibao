import axios from 'axios';
import Toast from "../../component/toast";

let host = 'http://10.10.13.153:8000/';
let ajaxConfig = {headers: {'Content-Type': 'application/json','Authorization':'Token'},timeout: 1000};

export const GET_EMAIL_LIST = 'get_email_list';
export const GET_RANK_LIST = 'get_rank_list';

export const getEmailList = (id) => {
    return (dispatch)=>{
        /*axios.post(host+'auth/client/',{
            id:id
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
            list:[{"id":1,"name":'hikki'},{"id":2,"name":"lolo"},{"id":1,"name":'hikki'},{"id":2,"name":"lolo"},{"id":1,"name":'hikki'},
                {"id":1,"name":'hikki'},{"id":2,"name":"lolo"},{"id":1,"name":'hikki'},{"id":2,"name":"lolo"},{"id":1,"name":'hikki'}]
        });
    }
};

export const getRankList = ()=>{
    return (dispatch)=>{
        dispatch({
            type:GET_RANK_LIST,
            list:[{"id":1,"name":'hikki'},{"id":2,"name":"lolo"},{"id":2,"name":"lolo"},{"id":2,"name":"lolo"},{"id":2,"name":"lolo"},
                {"id":1,"name":'hikki'},{"id":2,"name":"lolo"},{"id":2,"name":"lolo"},{"id":2,"name":"lolo"},{"id":2,"name":"lolo"}]
        });
    }
};



