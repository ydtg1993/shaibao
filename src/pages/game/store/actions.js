import axios from "axios";
import Toast from "../../component/toast";

export const OPEN_WEBSOCKET_CONNECTION = 'open_websocket_connection';
export const CLOSE_WEBSOCKET_CONNECTION = 'close_websocket_connection';
export const SET_BET_CHIP = 'set_bet_chip';
export const ENTER_HALL = 'enter_hall';

let host = 'http://10.10.13.153:8000/';
let ajaxConfig = {headers: {'Content-Type': 'application/json','Authorization':'Token'},timeout: 1000};

export const SetBetChip = (chip)=>({
    type:SET_BET_CHIP,
    value:chip
});

export const SetWebsocket = (client)=>({
    type:OPEN_WEBSOCKET_CONNECTION,
    value:client
});

export const CloseWebsocket = ()=>({
    type:CLOSE_WEBSOCKET_CONNECTION
});

export const EnterHall = (hall_tag)=> {
    return (dispatch) => {
        axios.post(host + 'three/hall/client/enter_hall', {
            hall_tag: hall_tag
        }, ajaxConfig).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                dispatch({
                    type:ENTER_HALL,
                    data:data.data
                });
            } else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            console.log(error);
            Toast.error('服务器开小差了', 1000);
        });
    }
};
