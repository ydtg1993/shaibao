import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    websocket:false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.OPEN_WEBSOCKET_CONNECTION:
            return state.set('websocket',action.value);
        case Actions.CLOSE_WEBSOCKET_CONNECTION:
            return state.set('websocket',false);
        default:
            return state
    }
};



