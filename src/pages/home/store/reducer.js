import * as Actions from './actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    requestLock:false,
    announcementList:false,
    emailList:false,
    rankList:false,
    emailInfo:false,
    betRecordList:false,
    activityList:false,
    signInList:false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SET_REQUEST_LOCK:
            return state.set('requestLock',action.bool);
        case Actions.GET_ANNOUNCEMENT_LIST:
            return state.set('announcementList',action.list);
        case Actions.GET_EMAIL_LIST:
            return state.set('emailList',action.list);
        case Actions.ADD_EMAIL_LIST:
            let emailList = state.get('emailList').concat(action.list);
            return state.set('emailList',emailList);
        case Actions.GET_RANK_LIST:
            return state.set('rankList',action.list);
        case Actions.GET_MAIL_INFO:
            return state.set('emailInfo',action.data);
        case Actions.GET_BET_RECORD_LIST:
            return state.set('betRecordList',action.list);
        case Actions.ADD_BET_RECORD_LIST:
            let betRecordList = state.get('betRecordList').concat(action.list);
            return state.set('betRecordList',betRecordList);
        case Actions.GET_ACTIVITY_LIST:
            return state.set('activityList',action.list);
        case Actions.GET_SIGNIN_LIST:
            return state.set('signInList',JSON.stringify(action.list));
        default:
            return state
    }
};

