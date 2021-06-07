import React from 'react';
import Dictaphone from './Speech.js';
import Landing from './landing';
import Contact from './contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/submit.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom"


function Submit() {

    // timer function to return to landing screen
    setTimeout(backHome,6000)
    function backHome () {
        window.location = "/speech"
    }

  return (

        <div className = "updated">
            <div id="submit"><h1>Contact Details Updated</h1>
            <br></br>
            <p>Your nominated contacts as well as your medical details have been updated. You don't need to do anything else. The phone will send the information when you use the activation phrase.</p>
            
            </div>
        </div>
  )
}   
 
export default Submit;