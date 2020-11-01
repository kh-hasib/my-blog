import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Post = ({post}) => {
    return (
        <div className="card mb-4">
            <img className="card-img-top" src="http://placehold.it/750x300" alt="card-cap" />
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.body.slice(0,100)}...</p>
                <LinkContainer to={`/posts/${post.id}`}>
                    <a href="#!" className="btn btn-primary">Read More &rarr;</a>
                </LinkContainer>
            </div>
            <div className="card-footer text-muted">
                Posted by{' '}
                <a href="#!">{post.author}</a>
            </div>
        </div>
    )
}

export default Post
