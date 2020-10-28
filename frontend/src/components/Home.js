import React from 'react'
import {Row} from 'react-bootstrap';
import PageNum from './pages/PageNum';
import Post from './posts/Post';
import Sidebar from './Sidebar';
import posts from '../posts';

const Home = () => {
    return (
            <Row>
            <div className="col-md-8">
                <h1 className="my-4">All Posts{' '}
                {/* <small>Secondary Text</small> */}
                </h1>
                {posts.map(post => (<Post key={post.id} post={post} />))}
                <PageNum />
            </div>
            <Sidebar />
            </Row>

    )
}

export default Home
