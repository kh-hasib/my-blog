import React, {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Row} from 'react-bootstrap';
import Paginate from './Paginate';
import Post from '../posts/Post';
import Sidebar from '../layout/Sidebar';
// import posts from '../posts';
import {listPosts} from '../../actions/postActions'
import Spinner from '../layout/Spinner';

const Home = ({match}) => {
    const keyword = match.params.keyword
    const pageNumber = parseInt(match.params.pageNumber) || 1
    
    const dispatch = useDispatch()
    const postList = useSelector(state => state.postList)
    const {loading, posts, pages} = postList
    useEffect(() =>{
        dispatch(listPosts(keyword, pageNumber));
    },[dispatch, keyword, pageNumber]);
    return (
            <Row>
            
            <div className="col-md-8">
                <h1 className="my-4">All Posts</h1>
                {loading ? <Spinner /> : (
                   <> {posts.map(post => (<Post key={post.id} post={post} />))}
                    <Paginate pages={pages} pageNum={pageNumber} keyword={keyword}/> </>
                )}
            </div> 
            <Sidebar />
            </Row>

    )
}

export default Home
