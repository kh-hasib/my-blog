import React, {useState, useEffect} from 'react'
import {Col, Form, Row, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {updatePost, postDetails} from '../../actions/postActions';
import { POST_UPDATE_RESET } from '../../constants/postConstants';
import Spinner from '../layout/Spinner';

const PostUpdate = ({match, history}) => {
    const postId = parseInt(match.params.id)
   

    // initializing local state to store temporary data  
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch()

    const details = useSelector(state => state.detailPost)
    const {loading, post} = details

    const update = useSelector(state => state.postUpdate)
    const {
        loading : loadingUpdate,
        success : successUpdate
    }  = update

    
    // console.log(typeof postId);
    // console.log(typeof post.id);
  
    useEffect(() => {
        if(successUpdate) {
            dispatch({type: POST_UPDATE_RESET})
            history.push(`/posts/${postId}`)
        } else if(post.id !== postId) {
            dispatch(postDetails(postId));
        } else {
            setTitle(post.title);
            setAuthor(post.author);
            setBody(post.body);
        }
    },[dispatch, history, post, postId, successUpdate]);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({
            id: postId,
            title,
            author,
            body
        }))
        setTitle('');
        setAuthor('');
        setBody('');
    }
    return (
        <Row>
            <Col md={8} className='py-3 mx-auto'>
                {loadingUpdate && <Spinner />}
                {loading ? <Spinner /> : (
                <>
                <h3>Update Post</h3>
                <hr />
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Your blog title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} 
                        />
                    </Form.Group>       
                    <Form.Group controlId="body">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={10}
                            value={body}
                            onChange={(e) => setBody(e.target.value)} 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
                </> )}
            </Col>
        </Row>
            
    )
}

export default PostUpdate
