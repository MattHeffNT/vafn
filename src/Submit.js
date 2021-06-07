import React from 'react';
import Dictaphone from './Speech.js';
import Landing from './landing';
import Contact from './contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/contactForm.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



 
function Submit() {

    console.log ("am I a joke to you")
  
  return (

        <Container>
        <Jumbotron><h1>Mad Lads</h1></Jumbotron>
        </Container>
  )
}
 
export default Submit;