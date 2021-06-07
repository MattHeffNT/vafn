import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function Dictaphone ()  {

    const { transcript, resetTranscript } = useSpeechRecognition()

    // start listening when document loads

    // Update the document title using the browser API
    let speech = SpeechRecognition.startListening()


    let stopTranscript = () => {
      SpeechRecognition.stopListening()
      console.log ("stop ")
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }

    
    // 'this' refers to the newly created element
    if (transcript === "OK Google test") {console.log ("phrase activated")

      setTimeout (() => {

      document.querySelector('body').innerHTML = 
      `
        <h2> Sent </h2>
      `
      },1000)

        
    } else {
        document.querySelector('body').style = "background-color:white;"
    }
    
    // reset the transcript after 3 seconds 
    // function reset () {
    //   resetTranscript
    //   console.log("reached")
    // }

    // setTimeout(reset,3000)



    return (
      <div>
        {/* <document onLoad={SpeechRecognition.startListening}>Start</document> */}
        {/* <button onClick={stopTranscript}>Stop</button> */}
        {/* <button onClick={resetTranscript}>Reset</button> */}

        {/* <Jumbotron><h1>Voice Assisted Family Notification</h1></Jumbotron> */}

        
        <Container fluid>
          <Jumbotron>
            <h1>Voice Activated Family Notification</h1>
          </Jumbotron>

          <div className="transcript-cont">{transcript}</div>
        </Container>
      </div>
  
    )
  }

  export default Dictaphone