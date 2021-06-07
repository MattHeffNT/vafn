import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useEffect } from 'react';
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

function Dictaphone ()  {

    const { finalTranscript, resetTranscript } = useSpeechRecognition()

    // Update the document title using the browser API
    useEffect(()=>{

      let startRecording = () => {
        let speech = SpeechRecognition.startListening();
      }
        startRecording()
    })

    // console.log(finalTranscript)

    let stopTranscript = () => {
      SpeechRecognition.stopListening()
      console.log ("stop ")
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }

    if (finalTranscript === "OK Google test") {

        let activate = () => {
          console.log (finalTranscript)

          
        }
        activate();
    }
    
    return (
     
        <Container fluid>

            {/* back arrow icon  */}
            <Link to="/contact">
            <li><IoIosArrowRoundBack className="back"/></li>
            </Link>

          <Jumbotron>
            <h1>Voice Activated Family Notification</h1>
            {finalTranscript}
          </Jumbotron>

          {/* <div className="transcript-cont">{transcript}</div> */}
        </Container>
  
    )
  }

  export default Dictaphone