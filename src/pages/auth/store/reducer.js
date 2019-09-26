import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    sendVerify:false,
    userInfo:false,
    gold:false,
    playerPosition:false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SET_USER_INFO:
            return state.set('userInfo',action.userInfo).set('gold',parseFloat(action.userInfo.gold));
        case Actions.CLEAR_USER_INFO:
            return state.set('userInfo',false);
        case Actions.SEND_VERIFY_EVENT:
            return state.set('sendVerify',true);
        case Actions.RESET_VERIFY_EVENT:
            return state.set('sendVerify',false);
        case Actions.PLAYER_GOLD_CHANGE:
            return state.set('gold',action.gold);
        case Actions.SET_PLAYER_POSITION:
            return state.set('playerPosition',action.position);
        default:
            return state
    }
};

