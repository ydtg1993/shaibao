import {USER_LOGIN} from './actions'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    userState:false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return state.set('userState',true);
        default:
            return state
    }
};

