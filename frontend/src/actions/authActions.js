import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../constants/authConstants';

export const loginAdmin = (userInfo) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST});
        console.log(userInfo)
        if(userInfo.email === 'admin@blog.com' && userInfo.password === 'admin'){
            dispatch({type: LOGIN_SUCCESS})
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Incorrect email or password"
        })
    }
}