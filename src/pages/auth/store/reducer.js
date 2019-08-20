import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    userInfo:false,
    showMongolian:false,
    showLoginDialog:false,
    showRegisterDialog:false,
    showResetDialog:false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        /*open dialog*/
        case Actions.OPEN_LOGIN_DIALOG:
            return state.set('showMongolian',true).set('showLoginDialog',true);
        case Actions.OPEN_REGISTER_DIALOG:
            return state.set('showMongolian',true).set('showRegisterDialog',true);
        case Actions.OPEN_RESET_DIALOG:
            return state.set('showLoginDialog',false).set('showResetDialog',true);
        case Actions.CLOSE_LOGIN_DIALOG:
            return state.set('showMongolian',false).set('showLoginDialog',false);
        case Actions.CLOSE_REGISTER_DIALOG:
            return state.set('showMongolian',false).set('showRegisterDialog',false);
        case Actions.CLOSE_RESET_DIALOG:
            return state.set('showMongolian',false).set('showResetDialog',false);
        case Actions.SET_USER_INFO:
            return state.set('userInfo',action.userInfo);
        default:
            return state
    }
};

