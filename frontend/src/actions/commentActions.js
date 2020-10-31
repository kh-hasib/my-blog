import axios from 'axios';
import { 
    COMMENT_CREATE_FAIL, 
    COMMENT_CREATE_REQUEST, 
    COMMENT_CREATE_SUCCESS,
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAIL 
} from "../constants/commentConstants";



export const createComment = (comment, id) => async (dispatch) => {
    try {
       dispatch({type: COMMENT_CREATE_REQUEST})
       const {data} = await axios.post(`/posts/${id}/comments`, comment, {headers: {'Content-Type' : 'application/json'}});
       console.log(data);
       dispatch({
           type: COMMENT_CREATE_SUCCESS,
           payload: data
       }) 
    } catch (error) {
        dispatch({
            type: COMMENT_CREATE_FAIL,
            payload : error.response && error.response.data.message ? 
                        error.response.data.message : error.message
        })        
    }
}

export const getComments = (id) => async (dispatch) => {
    try {
        dispatch({ type : GET_COMMENT_REQUEST})
        const {data} = await axios.get(`/posts/${id}/comments`)
        dispatch({
            type: GET_COMMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_COMMENT_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
