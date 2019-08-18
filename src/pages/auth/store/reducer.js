import * as Actions from './actions'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    userState:false,
    showMongolian:false,
    showLoginDialog:false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.USER_LOGIN:
            return state.set('showMongolian',true).set('showLoginDialog',true);
        case Actions.CLOSE_LOGIN_DIALOG:
            return state.set('showMongolian',false).set('showLoginDialog',false);
        default:
            return state
    }
};

