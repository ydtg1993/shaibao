import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    emailList:[]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.GET_EMAIL_LIST:
            return state.set('emailList',action.list);
        default:
            return state
    }
};

