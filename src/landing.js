import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './styles/landing.css'

import { Link } from 'react-router-dom'

function Landing() {
    const [isInputVisible, setIsInputVisible] = useState(false)

    return (
        <Container fluid>
            <Jumbotron>
                <h1>Voice Activated Family Notification</h1>
            </Jumbotron>
            <Container>
                <Form>
                    {/* form heading  */}
                    <ul>
                        <li>
                            <h2>Log in</h2>
                        </li>
                        <li>or sign up</li>
                    </ul>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    {/* password input text */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type={isInputVisible ? 'text' : 'password'}
                            placeholder="Password"
                        ></Form.Control>
                    </Form.Group>

                    {/* check boxes  */}
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            id="showPW"
                            label="Show password"
                            onClick={() => setIsInputVisible(!isInputVisible)}
                        />
                        <Form.Check type="checkbox" label="Keep me logged in" />
                    </Form.Group>
                    <Link to="/contact">
                        <Button variant="primary" type="submit" id="login">
                            Log in
                        </Button>
                    </Link>
                </Form>
            </Container>
        </Container>
    )
}

export default Landing
