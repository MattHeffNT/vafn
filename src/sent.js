import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


import Modal  from 'react-bootstrap/Modal';
import ModalHeader  from 'react-bootstrap/ModalHeader';
import  ModalBody  from 'react-bootstrap/ModalBody';
import  ModalFooter from 'react-bootstrap/ModalFooter';
import  Button from 'react-bootstrap/Button';
import './styles/sent.css';

import Dictaphone from './Speech'

function Sent () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};

   console.log (Dictaphone.setShow())
    

    return (
      
        // hide this until activation phrase is used
      <div class="sent-component">

    {/* launches modal  */}
      <Button variant="primary" onClick={handleShow} >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   
      </div>
    )
}

export default Sent