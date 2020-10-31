import React, {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import { Row, Button } from 'react-bootstrap'
import Sidebar from '../Sidebar'
import {postDetails, deletePost} from '../../actions/postActions'
import { LinkContainer } from 'react-router-bootstrap';
import { POST_DELETE_RESET } from '../../constants/postConstants';

const PostDetail = ({match, history, location}) => {
    const postId = parseInt(match.params.id)
    const dispatch = useDispatch()
    
    const details = useSelector(state => state.detailPost)
    const {loading, post} = details

    const dltPost =  useSelector(state => state.postDelete)
    const {
        loading:loadingDelete, 
        success:successDelete
    } = dltPost

    useEffect(() =>{
        if(successDelete){
            dispatch({type: POST_DELETE_RESET})
            history.push('/')
        }else{
            console.log(history.location)
            dispatch(postDetails(postId));
        }
        
    },[dispatch, history, successDelete, postId]);

    const onDelete = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deletePost(id))
          }
    }
    return (
        <Row>
            <div className="col-lg-8">

            {/*  Title  */}
            <h1 className="mt-4">{post.title}</h1>

            {/*  Author  */}
            <p className="lead">
            by
            <a href="#!"> Start Bootstrap</a>
            </p>

            <hr />

            {/*  Date/Time  */}
            <p>Posted on January 1, 2019 at 12:00 PM </p>

            <div className="float-right py-3">
                <LinkContainer to={`/admin/posts/${post.id}/edit`}>
                    <a href="#!" className="btn btn-primary"><i className="fas fa-edit"></i></a> 
                </LinkContainer>
                {' '}
                <Button variant="primary" onClick={() =>onDelete(post.id)} >
                    <i className="fas fa-trash-alt"></i>
                </Button>

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

           
            </div>
            <Sidebar />
        </Row>
    )
}

export default PostDetail
