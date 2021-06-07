import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {IoIosArrowRoundBack} from 'react-icons/io'

// mostly just a different margin on container
import './styles/contactForm.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function Contact () {

   console.log ("contact page")

    return (

        
    <Container id = "contactForm">
  

        <Link to="/">
        <li><IoIosArrowRoundBack class="back"/></li>
        </Link>

        <Form> 
            {/* form heading  */}
        
            <Form.Group controlId="formContactPerson">
                <strong><Form.Label>Contact Person</Form.Label></strong>
                <Form.Control type="text" placeholder="Please enter name of contact person"/>
            </Form.Group>

            <Form.Group controlId="formContactDetails">
                <strong><Form.Label>Contact Details</Form.Label></strong>
                <Form.Control type="telephone" placeholder="enter details of your nominated contact"/>
            </Form.Group>

            <Form.Group controlId="formMedicalConditions">
                <strong><Form.Label>Your Medical Conditions</Form.Label></strong>
                <Form.Control type="text" placeholder="enter details of any medical conditions"/>
            </Form.Group>

            <Link to="/Submit"><Button variant="primary" type="submit" id = "login">
                Submit
            </Button>
            </Link>
        </Form>
    </Container>
    )
}

export default Contact