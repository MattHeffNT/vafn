import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import {IoIosArrowRoundBack} from 'react-icons/io';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Sent from './sent';

import Modal  from 'react-bootstrap/Modal';
import ModalHeader  from 'react-bootstrap/ModalHeader';
import  ModalBody  from 'react-bootstrap/ModalBody';
import  ModalFooter from 'react-bootstrap/ModalFooter';
import  Button from 'react-bootstrap/Button';
import Sent from './sent';


function Dictaphone ()  {

    const { transcript, resetTranscript } = useSpeechRecognition()

    // Update the document title using the browser API
    useEffect(()=>{

      let startRecording = () => {
        let speech = SpeechRecognition.startListening();
      }
        startRecording()
    })

    // Modal variables

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let stopTranscript = () => {
      SpeechRecognition.stopListening()
      console.log ("stop ")
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }

    if (transcript === "OK Google test") {

        let activate = () => {
          console.log (transcript)
        }

        
        handleShow();
        activate();

        // call modal
    }
    
    return (
     
        <Container fluid>

            {/* back arrow icon  */}
            <Link to="/contact">
            <li><IoIosArrowRoundBack className="back"/></li>
            </Link>

          <Jumbotron>
            <h1>Voice Activated Family Notification</h1>
          </Jumbotron>

          <Sent></Sent>
          {/* <div className="transcript-cont">{transcript}</div> */}
        </Container>
  
    )
  }

  export default Dictaphone