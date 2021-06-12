import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { IoIosArrowRoundBack } from 'react-icons/io';

// mostly just a different margin on container
import './styles/contactForm.css';

import { Link } from 'react-router-dom';

function Contact() {
    sessionStorage.clear();

    function store(e) {
        let contactperson = document.querySelector('#formContactPerson');
        let contactdetails = document.querySelector('#formContactDetails');
        let medical = document.querySelector('#formMedicalConditions');

        if (
            contactperson.value == '' ||
            contactdetails.value == '' ||
            medical.value == ''
        ) {
            // prevent form from submitting
            e.preventDefault();

            // some visual feedback if person doesn't enter details
            contactperson.classList.add('error');
            contactdetails.classList.add('error');
            medical.classList.add('error');

            // remove red after displaying error
            setTimeout(() => {
                contactperson.classList.remove('error');
                contactdetails.classList.remove('error');
                medical.classList.remove('error');
            }, 1000);
        } else {
            // if details entered store in local session storage to retrieve (note this is client side)
            sessionStorage.setItem('contact', contactperson.value);
            sessionStorage.setItem('details', contactdetails.value);
            sessionStorage.setItem('medical', medical.value);
        }
    }

    return (
        // form heading
        <Container id="contactForm">
            <Link to="/">
                <li>
                    <IoIosArrowRoundBack className="back" />
                </li>
            </Link>

            <Form>
                <Form.Group controlId="formContactPerson">
                    <strong>
                        <Form.Label>Contact Person *</Form.Label>
                    </strong>
                    <Form.Control
                        type="text"
                        placeholder="Please enter name of contact person"
                    />
                </Form.Group>

                <Form.Group controlId="formContactDetails">
                    <strong>
                        <Form.Label>Contact Details *</Form.Label>
                    </strong>
                    <Form.Control
                        type="telephone"
                        placeholder="enter details of your nominated contact"
                    />
                </Form.Group>

                <Form.Group controlId="formMedicalConditions">
                    <strong>
                        <Form.Label>Your Medical Conditions *</Form.Label>
                    </strong>
                    <Form.Control
                        type="text"
                        placeholder="enter details of any medical conditions"
                    />
                </Form.Group>

                <Link to="/submit">
                    <Button
                        onClick={store}
                        variant="primary"
                        type="submit"
                        id="login"
                    >
                        Submit
                    </Button>
                </Link>
            </Form>
        </Container>
    );
}

export default Contact;
