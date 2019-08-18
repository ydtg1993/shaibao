import {USER_INFO} from './actions'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    userInfo:{}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_INFO:
            return state.set('userInfo',action.userInfo);
        default:
            return state
    }
};

