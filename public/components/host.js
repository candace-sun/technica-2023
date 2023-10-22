import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function Add(props) {
    //const {state, setState} = props.pState;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <style type="text/css">
            {`
        .btn-custom {
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.188);
            background-color: #adffc7;
        }

        .btn-custom:hover {
            background-color: #e8ffef;
        }
        `}
        </style>

        <Card style={{ width: '90vw' }}>
          <Card.Body>
            <Card.Title><b>{props.name}</b></Card.Title>
            <Card.Text>
              {props.date} at {props.time}<br/>
              {props.menu} <Badge bg="secondary">{props.dietary}</Badge>
            </Card.Text>
            <Button variant="custom" onClick={handleShow}>See more</Button>
          </Card.Body>
        </Card>


        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modal'
        >
        <Modal.Header closeButton>
          <Modal.Title>Host: {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ lineHeight: '1.4'}}>
          <b>Time:</b> {props.date} at {props.time} <br/>
          <b>Menu items:</b> {props.menu}<br/>
          <b>Dietary restrictions:</b> {props.dietary}<br/>
          <b>Price:</b> {props.price}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="custom">Register!</Button>
        </Modal.Footer>
      </Modal>
        
    </>
      );
}