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
    POST_CREATE_RESET,
    POST_UPDATE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAIL,
    POST_UPDATE_RESET,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAIL,
    POST_DELETE_RESET,

} from '../constants/postConstants';

export const postListReducer = (state={ posts: [] }, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                loading : true,
                posts: []
            }
        case GET_POST:
            const pages = parseInt(action.payload.headers.link.substr(-44,1))
            return {
                loading: false,
                posts: action.payload.data,
                pages: pages
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

export const updatePostReducer = (state={}, action) => {
    switch (action.type) {
        case POST_UPDATE_REQUEST:
            return {
                loading : true
            }
        case POST_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                post: action.payload,
            }
        case POST_UPDATE_FAIL:
            return {
                loading: false,
                error : action.payload
            }
        case POST_UPDATE_RESET:
            return {}
        default:
            return state;
    }
}

export const deletePostReducer = (state={}, action) => {
    switch (action.type) {
        case POST_DELETE_REQUEST:
            return {
                loading : true
            }
        case POST_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case POST_DELETE_FAIL:
            return {
                loading: false,
                error : action.payload
            }
        case POST_DELETE_RESET:
            return {}
        default:
            return state;
    }
}