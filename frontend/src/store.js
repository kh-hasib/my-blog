import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createPostReducer, postDetailReducer, postListReducer} from './reducers/postReducer'

const reducer = combineReducers({
    postList : postListReducer,
    detailPost : postDetailReducer,
    postCreate: createPostReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;