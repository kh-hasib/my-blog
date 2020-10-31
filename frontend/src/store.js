import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createPostReducer, deletePostReducer, postDetailReducer, postListReducer, updatePostReducer} from './reducers/postReducer'

const reducer = combineReducers({
    postList : postListReducer,
    detailPost : postDetailReducer,
    postCreate: createPostReducer,
    postUpdate: updatePostReducer,
    postDelete: deletePostReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;