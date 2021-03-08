import React, { useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './home/home';
import Tasks from './tasks/tasks';
import User from './user/user';

function NavbarComponent() {
    return (
        <div>
            <Navbar bg="light" variant="light" >
                <Navbar.Brand href="/home">Logo</Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Item>
                        <Nav.Link eventKey="home" href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tasks" href="/tasks">Tasks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="user" href="/user">User</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path='/home' component={Home}></Route>
                    <Route exact path='/tasks' component={Tasks}></Route>
                    <Route exact path='/user' component={User}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default NavbarComponent
