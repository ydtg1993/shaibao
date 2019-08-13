import {USER_IS_LOGIN} from './actions'

export default (state = [], action) => {
    switch (action.type) {
        case USER_IS_LOGIN:
            return [

            ];
        default:
            return state
    }
};