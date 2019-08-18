import { combineReducers } from 'redux';
import AuthReducer from '../pages/auth/store/reducer';
import GameReducer from '../pages/game/store/reducer';

export default combineReducers({
    auth:AuthReducer,
    game:GameReducer
})