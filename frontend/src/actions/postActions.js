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
    POST_CREATE_FAIL
} from '../constants/postConstants';


export const listPosts = () => async (dispatch) => {
    try {
        dispatch({ type : POST_REQUEST})
        const {data} = await axios.get('/posts')
        dispatch({
            type: GET_POST,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POST_FAIL,
            
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
