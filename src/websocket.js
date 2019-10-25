import * as actions from "./pages/game/store/actions";
import {ClearUserInfo, PlayerGoldChange} from "./pages/auth/store/actions";
import {SetWebsocket,CloseWebsocket} from "./pages/game/store/actions";
import {GameStartNotice} from "./pages/game/store/actions";
import {StartBetNotice} from "./pages/game/store/actions";
import {GameLotteryNotice} from "./pages/game/store/actions";
import {GameLotteryResultNotice} from "./pages/game/store/actions";
import {GameSettleNotice} from "./pages/game/store/actions";
import {GameOverNotice} from "./pages/game/store/actions";
import store from "./store";
import {WinNoticeEvent} from "./pages/game/store/actions";
import Toast from "./pages/component/toast";
import {WebsocketHost} from "./index";

export function connection(token){
    const ws = new WebSocket(WebsocketHost+token);
    store.dispatch(SetWebsocket(ws));

    ws.onopen = () => {
        console.log('connected');
    };

    ws.binaryType = "arraybuffer";
    ws.onmessage = event => {
        let byteArray = Buffer.from(event.data,'utf8');
        let string = byteArray.toString('utf8');
        if(isJSON(string)){
            let data = JSON.parse(string);
            triggerEvent(data);
        }
    };

    const connect = connection;
    ws.onclose = function(event) {
        console.log('disconnect');
        if(event.code === 4003){
            store.dispatch(ClearUserInfo());
        }else {
            store.dispatch(CloseWebsocket());
            var interval = setInterval(function () {
                connect(token);
                clearInterval(interval);
            },3000);
        }
    };
}

function triggerEvent(data){
    if(data.event === actions.UPDATE_PLAYER_INFO){
        store.dispatch(PlayerGoldChange(parseFloat(data.data.gold)));
        return;
    }
    let position = store.getState().auth.get('playerPosition');
    /*player win gold*/
    let win_gold;
    if(data.event === actions.WINNING_NOTICE_EVENT && position !== data.hall_tag){
        win_gold = parseFloat(data.data.win_gold);
        store.dispatch(PlayerGoldChange(store.getState().auth.get('gold') + win_gold));
        return;
    }
    if(position !== data.hall_tag){
        return;
    }
    switch (data.event) {
        case actions.GAME_START_NOTICE_EVENT:
            store.dispatch(GameStartNotice(data.data.sequence,data.data.previous_result));
            break;
        case actions.START_BET_NOTICE_EVENT:
            store.dispatch(StartBetNotice(data.data.countdown));
            break;
        case actions.GAME_LOTTERY_NOTICE_EVENT:
            store.dispatch(GameLotteryNotice());
            break;
        case actions.GAME_LOTTERY_RESULT_EVENT:
            store.dispatch(GameLotteryResultNotice(data.data.result,data.data.positions));
            break;
        case actions.GAME_SETTLE_NOTICE_EVENT:
            store.dispatch(GameSettleNotice());
            break;
        case actions.GAME_OVER_NOTICE_EVENT:
            store.dispatch(GameOverNotice());
            break;
        /*player receive gold*/
        case actions.WINNING_NOTICE_EVENT:
            win_gold = parseFloat(data.data.win_gold);
            store.dispatch(WinNoticeEvent(win_gold,data.data.positions));
            break;
        /*player bet*/
        case actions.GAME_BET_SUCCESS_NOTICE_EVENT:
            break;
        case actions.GAME_BET_ERROR_NOTICE_EVENT:
            Toast.error(data.data.msg,1000);
            var gold = store.getState().auth.get('gold') + parseFloat(data.data.gold);
            store.dispatch(PlayerGoldChange(gold));
            break;
        default:
            break;
    }
}

function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}