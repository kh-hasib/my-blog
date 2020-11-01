import React, {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Col, Row, Form, Button } from 'react-bootstrap'
import {loginAdmin} from '../actions/authActions';
// import { Redirect } from 'react-router-dom';

const Login = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authInfo = useSelector(state => state.auth)
    const {authenticated} = authInfo

    const dispatch = useDispatch()
    useEffect(() => {
        if(authenticated){
            history.push('/')
        }
    }, [authenticated]);
    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginAdmin({
            email,
            password
        }))
        setEmail('');
        setPassword('');
    }
    return (
        <Row>
            <Col md={5} className='py-3 mx-auto'>
            <div className="card">
                <h5 className="card-header">Login</h5>
                <div className="card-body">
                <Form onSubmit={loginHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                         />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                </div>
            </div>
            </Col>
        </Row>
    )
}

export default Login
