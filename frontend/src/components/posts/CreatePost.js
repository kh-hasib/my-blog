import React, {useState, useEffect} from 'react'
import {Col, Form, Row, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import Sidebar from '../Sidebar';
import {createPost} from '../../actions/postActions';
import { POST_CREATE_RESET } from '../../constants/postConstants';

const CreatePost = ({history}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch()
    const create = useSelector(state => state.postCreate)
    const {success} = create
    useEffect(() => {
        if(success) {
            dispatch({type: POST_CREATE_RESET})
            history.push('/')
        }
    },[dispatch, history, success]);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({
            userId : 1,
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
            <Col md={8} className='py-3'>
                <h3>Write a blog.</h3>
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
                        Publish
                    </Button>
                </Form>
            </Col>
            <Sidebar />
        </Row>
            
    )
}

export default CreatePost
