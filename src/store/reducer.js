import { combineReducers } from 'redux';
import AuthReducer from '../pages/auth/store/reducer';

export default combineReducers({
    auth:AuthReducer
})