import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { useState } from 'react';

function AddFriend() {

    const[newFriend, setNewFriend] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        let n = e.target.name; 
        let v = e.target.value; 
        setNewFriend(prev => ({...prev,[n]:v}))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(newFriend); 
        let postFriend = {
            method: "POST", 
            headers: {"Content-Type":"application/json"}, 
            body: JSON.stringify(newFriend), 
        }
        fetch('https://64797baca455e257fa633c34.mockapi.io/api/friends', postFriend)

    }
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Friend
        </Button><br/><br/>
    
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Music Friend!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Control name="name" onChange={handleChange} type="text" placeholder="Full Name"/><br/>
                <Form.Control name="music" onChange={handleChange} type="text" placeholder="Favorite Genre of Music"/><br/>
                <Form.Control name="avatar" onChange={handleChange} type="url" placeholder="Link to your friends Avatar"/><br/>
                <Button type="submit"> Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    }

export default AddFriend