import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    emailList:[],
    rankList:[]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.GET_EMAIL_LIST:
            return state.set('emailList',action.list);
        case Actions.GET_RANK_LIST:
            return state.set('rankList',action.list)
        default:
            return state
    }
};

