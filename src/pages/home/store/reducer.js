import * as Actions from './actions';
import { fromJS } from 'immutable';
import {GET_MAIL_INFO} from "./actions";

const defaultState = fromJS({
    emailList:[],
    rankList:[],
    emailInfo:false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.GET_EMAIL_LIST:
            return state.set('emailList',action.list);
        case Actions.GET_RANK_LIST:
            return state.set('rankList',action.list);
        case Actions.GET_MAIL_INFO:
            return state.set('emailInfo',action.data);
        default:
            return state
    }
};

