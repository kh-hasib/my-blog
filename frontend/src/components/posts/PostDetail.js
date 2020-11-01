import React, {useEffect, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import { Row, Button } from 'react-bootstrap'
import Sidebar from '../Sidebar'
import {postDetails, deletePost} from '../../actions/postActions'
import { LinkContainer } from 'react-router-bootstrap';
import { POST_DELETE_RESET } from '../../constants/postConstants';
import { createComment, getComments } from '../../actions/commentActions';
import { COMMENT_CREATE_RESET } from '../../constants/commentConstants';
import Comment from '../comments/Comment';
import Spinner from '../layout/Spinner';

const PostDetail = ({match, history, location}) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const postId = parseInt(match.params.id)
    const dispatch = useDispatch()
    
    const details = useSelector(state => state.detailPost)
    const {loading, post} = details

    const dltPost =  useSelector(state => state.postDelete)
    const {
        loading:loadingDelete, 
        success:successDelete
    } = dltPost

    const commentCreate = useSelector(state => state.commentCreate)
    const {
        success : commentCreateSuccess,
        comment: newComment
    } = commentCreate

    const commentGet = useSelector(state => state.commentGet)
    const {comments} = commentGet
    //console.log(comments)

    useEffect(() =>{
        if(successDelete){
            dispatch({type: POST_DELETE_RESET})
            history.push('/')
        } else if (commentCreateSuccess){
            dispatch({type: COMMENT_CREATE_RESET})
            comments.push(newComment)
           
        } else{
            console.log(history.location)
            dispatch(postDetails(postId))
        }     
        // eslint-disable-next-line  
    },[dispatch, history, successDelete, postId, commentCreateSuccess]);

    useEffect(() => {
        dispatch(getComments(postId))
        //eslint-disable-next-line
    }, [])

    const onDelete = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deletePost(id))
          }
    }

    const commentSubmit = (e) => {
        e.preventDefault();
        dispatch(createComment({
            name,
            body:comment
        }, post.id))
        setName('')
        setComment('')
    }
    return (
        <Row>
            
            <div className="col-lg-8">
            
            {loadingDelete && <Spinner />}
            {loading ? <Spinner /> : (
            <>
            {/*  Title  */}
            <h1 className="mt-4">{post.title}</h1>

            {/*  Author  */}
            <p className="lead">
            by
            <a href="#!"> {post.author}</a>
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
                <form onSubmit={commentSubmit}>
                <div className='form-group'>
                    <input 
                        type='text'
                        className='form-control' 
                        name='name' 
                        value={name} 
                        placeholder='Your name'
                        onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        name='comment' 
                        value={comment}
                        onChange={e => setComment(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>

            {/* Single Comment */}
            {comments.map(cmnt => (
                <Comment key={cmnt.id} cmnt={cmnt} />
            ))}
           </> )}
            </div>
            <Sidebar />
        </Row>
    )
}

export default PostDetail
