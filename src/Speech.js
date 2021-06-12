// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// voice ML stuff
import { PorcupineWorkerFactory } from '@picovoice/porcupine-web-en-worker';
import { usePorcupine } from '@picovoice/porcupine-web-react';
import './ml/contact-nominee__en_windows_2021-07-07-utc_v1_9_0.ppn';

// some react and bootstrap libraries
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { IoIosArrowRoundBack } from 'react-icons/io';

// modal styling
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
const keywords = [{ builtin: 'Picovoice', sensitivity: 0.65 }];

function Dictaphone() {
    // Modal variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    //storage variables
    let contactperson = sessionStorage.getItem('contact');
    //  let contactdetails = sessionStorage.getItem('details');
    let medical = sessionStorage.getItem('medical');

    // function to check if key word has been said
    const keywordEventHandler = (keywordLabel) => {
        console.log(`Porcupine detected ${keywordLabel}`);
        handleShow();
    };

    usePorcupine(
        PorcupineWorkerFactory,
        { keywords: keywords, start: true },
        keywordEventHandler
    );

    return (
        <div>
            {/* back arrow icon  */}
            <Link to="/contact">
                <li>
                    <IoIosArrowRoundBack className="back" />
                </li>
            </Link>

            <Jumbotron>
                <h1>Voice Activated Family Notification</h1>
            </Jumbotron>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Thank you</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Your information about {medical} has been sent to
                    {contactperson}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Dictaphone;
