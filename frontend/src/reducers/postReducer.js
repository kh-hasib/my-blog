import {
    POST_REQUEST, 
    GET_POST, 
    POST_FAIL, 
    POST_DETAIL_SUCCESS, 
    POST_DETAIL_REQUEST, 
    POST_DETAIL_FAIL,
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    POST_CREATE_RESET
} from '../constants/postConstants';

export const postListReducer = (state={ posts: [] }, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                loading : true,
                posts: []
            }
        case GET_POST:
            return {
                loading: false,
                posts: action.payload,
            }
        case POST_FAIL:
            return {
                loading: false,
                error : action.payload
            }
    
        default:
            return state;
    }
}

export const postDetailReducer = (state={ post: {comments: [] }}, action) => {
    switch (action.type) {
        case POST_DETAIL_REQUEST:
            return {
                loading : true,
                ...state
            }
        case POST_DETAIL_SUCCESS:
            return {
                loading: false,
                post: action.payload,
            }
        case POST_DETAIL_FAIL:
            return {
                loading: false,
                error : action.payload
            }
    
        default:
            return state;
    }
}


export const createPostReducer = (state={}, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
            return {
                loading : true
            }
        case POST_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                post: action.payload,
            }
        case POST_CREATE_FAIL:
            return {
                loading: false,
                error : action.payload
            }
        case POST_CREATE_RESET:
            return {}
        default:
            return state;
    }
}