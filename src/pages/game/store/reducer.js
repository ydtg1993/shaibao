import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    websocket:false,
    chip:false,
    hallInfo:false,
    sequence:'0000',
    priorResult:[1,1,1],
    priorPosition:false,
    stage:false,
    lottery_time_countdown:false,
    recordList:false,
    win_event_data:false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.OPEN_WEBSOCKET_CONNECTION:
            return state.set('websocket',action.value);
        case Actions.CLOSE_WEBSOCKET_CONNECTION:
            return state.set('websocket',false);
        case Actions.SET_BET_CHIP:
            return state.set('chip',action.value);
        case Actions.ENTER_HALL:
            var countdown = action.data.countdown;
            if(countdown < 1){
                countdown = 0;
            }
            return state.set('hallInfo',action.data)
                .set('priorResult',action.data.previous_result)
                .set('stage',action.data.stage)
                .set('sequence',action.data.sequence)
                .set('lottery_time_countdown',countdown);
        case Actions.GET_RECORD_LIST:
            return state.set('recordList',action.list);
        case Actions.SET_PRIOR_RESULT:
            return state.set('priorResult',action.value);
        case Actions.SET_PRIOR_POSITION:
            return state.set('priorPosition',action.value);
        case Actions.SET_LOTTERY_TIME_COUNTDOWN:
            return state.set('lottery_time_countdown',action.lottery_time_countdown);

        case Actions.GAME_START_NOTICE_EVENT:
            return state.set('sequence',action.sequence)
                .set('priorResult',action.previous_result)
                .set('stage',Actions.START_STAGE);
        case Actions.START_BET_NOTICE_EVENT:
            return state.set('lottery_time_countdown',action.lottery_time_countdown)
                .set('stage',Actions.BET_STAGE);
        case Actions.GAME_LOTTERY_NOTICE_EVENT:
            return state.set('stage',Actions.LOTTERY_STAGE);
        case Actions.GAME_LOTTERY_RESULT_EVENT:
            return state.set('priorResult',action.result)
                .set('priorPosition',action.positions)
                .set('stage',Actions.LOTTERY_RESULT_STAGE);
        case Actions.GAME_SETTLE_NOTICE_EVENT:
            return state.set('stage',Actions.SETTLE_STAGE);
        case Actions.WINNING_NOTICE_EVENT:
            return state.set('stage',Actions.WIN_STAGE).set('win_event_data',{win_gold:action.win_gold,positions:action.positions});
        case Actions.GAME_OVER_NOTICE_EVENT:
            return state.set('stage',Actions.OVER_STAGE);
        case Actions.INIT_STAGE_EVENT:
            return state.set('stage',Actions.START_STAGE);
        default:
            return state
    }
};



