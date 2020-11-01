import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../constants/authConstants';

export const loginReducer = (state= {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading : true,
                ...state
            }
        case LOGIN_SUCCESS:
            return {
                loading : false,
                authenticated: true
            }
        case LOGIN_FAIL : 
            return {
                loading: false,
                error: action.payload,
                ...state
            }
        case LOGOUT:
            return {
                authenticated : false
            }
        default:
            return state;
    }
}