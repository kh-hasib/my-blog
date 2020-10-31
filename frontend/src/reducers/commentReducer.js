import { 
    COMMENT_CREATE_FAIL, 
    COMMENT_CREATE_REQUEST, 
    COMMENT_CREATE_RESET, 
    COMMENT_CREATE_SUCCESS, 
    GET_COMMENT_FAIL, 
    GET_COMMENT_REQUEST, 
    GET_COMMENT_SUCCESS } from "../constants/commentConstants"


export const createCommentReducer = (state={}, action) => {
    switch (action.type) {
        case COMMENT_CREATE_REQUEST:
            return {
                loading : true
            }
        case COMMENT_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                comment: action.payload,
            }
        case COMMENT_CREATE_FAIL:
            return {
                loading: false,
                error : action.payload
            }
        case COMMENT_CREATE_RESET:
            return {}
        default:
            return state;
    }
}

export const getCommentReducer = (state={ comments: [] }, action) => {
    switch (action.type) {
        case GET_COMMENT_REQUEST:
            return {
                loading : true,
                comments: []
            }
        case GET_COMMENT_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
            }
        case GET_COMMENT_FAIL:
            return {
                loading: false,
                error : action.payload
            }
    
        default:
            return state;
    }
}
