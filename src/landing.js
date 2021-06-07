import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/landing.css';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"

function Landing () {

    let { path, url } = useRouteMatch();

    return (

    <Container fluid>
    <Jumbotron>
        <h1>Voice Activated Family Notification</h1>
    </Jumbotron>
    <Container>    
    <Form> 
    {/* form heading  */}
   <ul><li><h2>Log in</h2></li><li>or sign up</li></ul>

   
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
    </Form.Group>

    {/* check boxes  */}
    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show password" />
        <Form.Check type="checkbox" label="Keep me logged in" />
    </Form.Group>

{/* 
    add function to pass value to local storage....this will be used as token
    for prototype to keep user logged in.....(add logout button on other pages)
    that wil reset the local storage value to 0 (which will take back to landing page) */}

 
    <Link to="/contact"><Button variant="primary" type="submit" id = "login">
        Log in
    </Button>
    </Link>

  </Form>
  </Container>
  </Container>
 )
}


export default Landing