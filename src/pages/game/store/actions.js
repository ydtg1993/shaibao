import axios from "axios";
import Toast from "../../component/toast";
import Cookies from "universal-cookie";
import {CLEAR_USER_INFO, PlayerGoldChange, SetPlayerPosition} from "../../auth/store/actions";
import {Host} from "../../../index";

export const OPEN_WEBSOCKET_CONNECTION = 'open_websocket_connection';
export const CLOSE_WEBSOCKET_CONNECTION = 'close_websocket_connection';
export const SET_PRIOR_RESULT = 'set_prior_result';
export const SET_PRIOR_POSITION = 'set_prior_position';
export const SET_BET_CHIP = 'set_bet_chip';
export const ENTER_HALL = 'enter_hall';

export const GET_RECORD_LIST = 'get_record_list';

/*game websocket event*/
export const UPDATE_PLAYER_INFO = 'UpdatePlayerInfoNotice';
export const GAME_START_NOTICE_EVENT = 'GameStartNotice';
export const START_BET_NOTICE_EVENT = 'StartBetNotice';
export const GAME_LOTTERY_NOTICE_EVENT = 'GameLotteryNotice';
export const GAME_LOTTERY_RESULT_EVENT = 'GameLotteryResultNotice';
export const GAME_SETTLE_NOTICE_EVENT = 'GameSettleNotice';
export const WINNING_NOTICE_EVENT = 'WinningNotice';
export const GAME_OVER_NOTICE_EVENT = 'GameOverNotice';
/*bet event*/
export const GAME_BET_SUCCESS_NOTICE_EVENT = 'GameBetSuccessNotice';
export const GAME_BET_ERROR_NOTICE_EVENT = 'GameBetErrorNotice';
/*game stage*/
export const START_STAGE = 'StartStage';
export const BET_STAGE = 'BetStage';
export const LOTTERY_STAGE = 'LotteryStage';
export const LOTTERY_RESULT_STAGE = 'LotteryResultStage';
export const SETTLE_STAGE = 'SettleStage';
export const WIN_STAGE = 'WinStage';
export const OVER_STAGE = 'OverStage';
/*init stage*/
export const INIT_STAGE_EVENT = 'init_stage_event';
export const SET_LOTTERY_TIME_COUNTDOWN = 'set_lottery_time_countdown';

const ajaxHeaders = function () {
    const cookies = new Cookies();
    const userinfo = cookies.get('userinfo');
    let token = userinfo ? userinfo.token : '';
    let ajaxConfig = {headers: {'Content-Type': 'application/json','Authorization':'Token '+token},timeout: 3000};
    return ajaxConfig;
};

const ClearUserInfo = function () {
    const cookies = new Cookies();
    cookies.remove('userinfo', { path: '/' });
    return {type:CLEAR_USER_INFO}
};

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

export const InitStage = ()=>({
    type:INIT_STAGE_EVENT
});

export const EnterHall = (hall_tag)=> {
    return (dispatch) => {
        axios.post(Host + 'three/hall/client/enter_hall', {
            hall_tag: hall_tag
        }, ajaxHeaders()).then((res) => {
            let data = res.data;
            if (data.code === 20000) {
                dispatch({
                    type:ENTER_HALL,
                    data:data.data
                });
                dispatch(PlayerGoldChange(data.data.player.gold));
                dispatch(SetPlayerPosition(hall_tag));
                if(data.data.stage !== START_STAGE || data.data.stage !== BET_STAGE){
                    Toast.info('正在开奖中...');
                }
            } else if(data.code === 40001){
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            }else {
                Toast.info(data.message);
            }
        }).catch((error) => {
            Toast.error('服务器开小差了', 1000);
        });
    }
};

export const getRecordList = (hall_tag)=>{
    return (dispatch)=>{
        axios.post(Host+'three/hall/result/lottery_record',{
            hall_tag:hall_tag
        },ajaxHeaders()).then((res)=>{
            let data = res.data;
            if(data.code === 20000){
                dispatch({
                    type:GET_RECORD_LIST,
                    list:data.data.ls
                });
            }else if(data.code === 40001){
                Toast.info(data.message);
                dispatch(ClearUserInfo());
            }else {
                Toast.info(data.message);
            }
        }).catch((error)=>{
            console.log(error);
            Toast.error('服务器开小差了',1000);
        });
    }
};

export const GameStartNotice = (sequence,previous_result)=>({
    type:GAME_START_NOTICE_EVENT,
    sequence:sequence,
    previous_result:previous_result
});

export const StartBetNotice = (lottery_time_countdown)=>({
    type:START_BET_NOTICE_EVENT,
    lottery_time_countdown
});

export const SetLotteryTimeCountdown = (lottery_time_countdown)=>({
    type:SET_LOTTERY_TIME_COUNTDOWN,
    lottery_time_countdown
});

export const GameLotteryNotice = ()=>({
    type:GAME_LOTTERY_NOTICE_EVENT
});

export const GameLotteryResultNotice = (result,positions)=>({
    type:GAME_LOTTERY_RESULT_EVENT,
    result:result,
    positions:positions
});

export const GameSettleNotice = ()=>({
    type:GAME_SETTLE_NOTICE_EVENT
});

export const WinNoticeEvent = (win_gold,positions)=>({
    type:WINNING_NOTICE_EVENT,
    win_gold,
    positions
});

export const GameOverNotice = ()=>({
    type:GAME_OVER_NOTICE_EVENT
});


