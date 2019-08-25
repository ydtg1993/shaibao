import { combineReducers } from 'redux';
import AuthReducer from '../pages/auth/store/reducer';
import HomeReducer from '../pages/home/store/reducer';
import GameReducer from '../pages/game/store/reducer';

export default combineReducers({
    auth:AuthReducer,
    home:HomeReducer,
    game:GameReducer
})