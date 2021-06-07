// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { PorcupineWorkerFactory } from '@picovoice/porcupine-web-en-worker';
import { usePorcupine } from '@picovoice/porcupine-web-react';

import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import {IoIosArrowRoundBack} from 'react-icons/io';

import {
  HashRouter as Router,
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

const keywords = [{ builtin: 'Picovoice', sensitivity: 0.65 }];

function Dictaphone (props)  {

    const keywordEventHandler = keywordLabel => {
      console.log(`Porcupine detected ${keywordLabel}`);
    };


    // Update the document title using the browser API


      // let startRecording = () => {
      //   let speech = SpeechRecognition.startListening();
      // }
      //   startRecording()


    // Modal variables

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // let stopTranscript = () => {
    //   SpeechRecognition.stopListening()
    //   console.log ("stop ")
    // }

    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //   return null
    // }

    // if (finalTranscript  == "OK Google test") {

    //     let activate = () => {
    //       console.log (finalTranscript )
    //     }
        
        // call modal
        // handleShow();
        // activate();

        
    
    
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