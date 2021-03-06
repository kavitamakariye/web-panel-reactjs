import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let loginUser = () => {
        localStorage.setItem('user', JSON.stringify({ email: email, password: password }));
        localStorage.setItem('isLoggedIn', true);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => loginUser()}>Submit</Button>
            </Form>
        </div>
    )
}

export default Login
