import axios from 'axios';
import {
    POST_REQUEST, 
    GET_POST, 
    POST_FAIL,
    POST_DETAIL_REQUEST,
    POST_DETAIL_SUCCESS,
    POST_DETAIL_FAIL,
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    POST_UPDATE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAIL,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAIL

} from '../constants/postConstants';


export const listPosts = (keyword='', pageNumber=1) => async (dispatch) => {
    try {
        dispatch({ type : POST_REQUEST})
        console.log(keyword)
        const res = await axios.get(`/posts?q=${keyword}&_page=${pageNumber}&_limit=2&_sort=id&_order=desc`)
    
        dispatch({
            type: GET_POST,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: POST_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const postDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type : POST_DETAIL_REQUEST})
        const {data} = await axios.get(`/posts/${id}`)
        console.log(data)
        dispatch({
            type: POST_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POST_DETAIL_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
       dispatch({type: POST_CREATE_REQUEST})
       const {data} = await axios.post('/posts', post, {headers: {'Content-Type' : 'application/json'}});
       console.log(data);
       dispatch({
           type: POST_CREATE_SUCCESS,
           payload: data
       }) 
    } catch (error) {
        dispatch({
            type: POST_CREATE_FAIL,
            payload : error.response && error.response.data.message ? 
                        error.response.data.message : error.message
        })        
    }
}

export const updatePost = (post) => async (dispatch) => {
    try {
       dispatch({type: POST_UPDATE_REQUEST})
       const {data} = await axios.put(`/posts/${post.id}`, post, {headers: {'Content-Type' : 'application/json'}});
       console.log(data);
       dispatch({
           type: POST_UPDATE_SUCCESS,
           payload: data
       }) 
    } catch (error) {
        dispatch({
            type: POST_UPDATE_FAIL,
            payload : error.response && error.response.data.message ? 
                        error.response.data.message : error.message
        })        
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch({ type : POST_DELETE_REQUEST})
        await axios.delete(`/posts/${id}`)
        dispatch({
            type: POST_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: POST_DELETE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



