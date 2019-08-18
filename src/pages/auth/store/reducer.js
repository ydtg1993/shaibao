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
        default:
            return state
    }
};

