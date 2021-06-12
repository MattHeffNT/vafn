import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/submit.css';

import {

    useHistory

  } from "react-router-dom"

function Submit() {

  let history = useHistory();
  
    // timer function to return to landing screen
    setTimeout(gotoSpeech,6000)
    function gotoSpeech () {
      history.push("/speech")
    }
 

  return (

        <div className = "updated">
            <div id="submit"><h1>Contact Details Updated</h1>
            <br></br>
            <p>"Your nominated contacts as well as your medical details have been updated. You don't need to do anything else. The phone will send the information when you use the activation phrase."</p>
            
            </div>
        </div>
  )
}   
 
export default Submit;