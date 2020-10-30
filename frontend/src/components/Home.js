import React, {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Row} from 'react-bootstrap';
import PageNum from './pages/PageNum';
import Post from './posts/Post';
import Sidebar from './Sidebar';
// import posts from '../posts';
import {listPosts} from '../actions/postActions'

const Home = () => {
    const dispatch = useDispatch()
    const postList = useSelector(state => state.postList)
    const {loading, posts} = postList
    useEffect(() =>{
        dispatch(listPosts());
    },[dispatch]);
    return (
            <Row>
            <div className="col-md-8">
                <h1 className="my-4">All Posts{' '}
                {/* <small>Secondary Text</small> */}
                </h1>
                {posts.map(post => (<Post key={post.id} post={post} />)).reverse()}
                <PageNum />
            </div>
            <Sidebar />
            </Row>

    )
}

export default Home
