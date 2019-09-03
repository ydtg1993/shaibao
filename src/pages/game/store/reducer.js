import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    websocket:false,
    chip:false,
    hallInfo:false,
    priorResult:[1,1,1]
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
            return state.set('hallInfo',action.data);
        default:
            return state
    }
};



