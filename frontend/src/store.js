import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createPostReducer, deletePostReducer, postDetailReducer, postListReducer, updatePostReducer} from './reducers/postReducer'
import { createCommentReducer, getCommentReducer } from './reducers/commentReducer';

const reducer = combineReducers({
    postList : postListReducer,
    detailPost : postDetailReducer,
    postCreate: createPostReducer,
    postUpdate: updatePostReducer,
    postDelete: deletePostReducer,
    commentCreate: createCommentReducer,
    commentGet : getCommentReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;