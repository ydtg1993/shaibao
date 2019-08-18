import * as Actions from './actions'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    userState:false,
    showMongolian:false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.USER_LOGIN:
            return state.set('showMongolian',true);
        default:
            return state
    }
};

