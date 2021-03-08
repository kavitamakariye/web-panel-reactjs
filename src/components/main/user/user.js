import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function User() {

    const [isChangePassword, setIsChangedPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        let userObj = JSON.parse(localStorage.getItem('user'))
        setUserName(userObj.email)
    }, [])

    let savePassword = () => {
        setIsChangedPassword(false);
        localStorage.setItem('user', JSON.stringify({ email: userName, password: newPassword }))
    }
    return (
        <div style={{ margin: 60 }}>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={userName} />
                    </Col>
                </Form.Group>
                {isChangePassword &&
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </Col>
                    </Form.Group>
                }
                {!isChangePassword && <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="*******" />
                    </Col>
                </Form.Group>}
                <>
                    {!isChangePassword && <Button variant="outline-secondary" type="submit" style={{ margin: 10, marginLeft: 0 }} onClick={() => setIsChangedPassword(true)}>Change Password</Button>}
                    {isChangePassword && <Button variant="outline-secondary" type="submit" style={{ margin: 10, marginLeft: 0 }} onClick={() => savePassword()}>Save Password</Button>}
                    <Button variant="outline-secondary" type="submit" style={{ margin: 10 }} onClick={() => localStorage.clear()} >Logout</Button>
                </>
            </Form>
        </div>
    )
}

export default User
