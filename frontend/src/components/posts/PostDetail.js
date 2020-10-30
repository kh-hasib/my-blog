import React, {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import { Row, Button } from 'react-bootstrap'
import Sidebar from '../Sidebar'
import {postDetails} from '../../actions/postActions'
import { LinkContainer } from 'react-router-bootstrap';

const PostDetail = ({match}) => {
    const dispatch = useDispatch()
    const details = useSelector(state => state.detailPost)
    const {loading, post} = details
    useEffect(() =>{
        dispatch(postDetails(match.params.id));
    },[dispatch, match]);
    return (
        <Row>
            <div className="col-lg-8">

            {/*  Title  */}
            <h1 className="mt-4">{post.title}</h1>

            {/*  Author  */}
            <p className="lead">
            by
            <a href="#!">Start Bootstrap</a>
            </p>

            <hr />

            {/*  Date/Time  */}
            <p>Posted on January 1, 2019 at 12:00 PM </p>

            <div className="float-right py-3">
                <LinkContainer to='/'>
                    <a href="#!" className="btn btn-primary"><i className="fas fa-edit"></i></a> 
                </LinkContainer>
                {' '}
                <LinkContainer to='/'>
                    <a href="#!" className="btn btn-primary"><i className="fas fa-trash-alt"></i></a>
                </LinkContainer>
            </div>

            <hr />

            {/*  Preview Image  */}
            <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />

            <hr />

            {/* Post Content */}
            <p>{post.body}</p>
            <hr />

            {/* Comments Form */}
            <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
                <form>
                <div className="form-group">
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>

            {/* Single Comment */}
            <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
            <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
            </div>

            {/* Comment with nested comments */}
            <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
            <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                <div className="media-body">
                    <h5 className="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
                </div>

                <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                <div className="media-body">
                    <h5 className="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
                </div>

            </div>
            </div>

            </div>
            <Sidebar />
        </Row>
    )
}

export default PostDetail
