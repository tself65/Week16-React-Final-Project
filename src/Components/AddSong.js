import React from 'react' 
import {Modal, Button, Form} from 'react-bootstrap'
import { useState } from 'react';



function AddSong() {

const[newSong, setNewSong] = useState({});     
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleChange = (e) => {
    let n = e.target.name; 
    let v = e.target.value; 
    setNewSong(prev => ({...prev,[n]:v}))
}

const handleSubmit = (e) => {
    e.preventDefault(); 
    let postSong = {
        method: "POST", 
        headers: {"Content-Type":"application/json"}, 
        body: JSON.stringify(newSong),
    }
    fetch(`http://localhost:3500/songs`, postSong)
}

return (
  <>
    <Button variant="primary" onClick={handleShow}>
      Add Song
    </Button><br/><br/>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Song to the Library</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Control name="songName" onChange={handleChange} type="text" placeholder="Song Name"/><br/>
            <Form.Control name="artist" onChange={handleChange} type="text" placeholder="Artist Name"/><br/>
            <Form.Control name="img" onChange={handleChange} type="url" placeholder="Link to Album Art"/><br/>
            <Button type="submit" variant="primary" onClick={handleClose}>Submit</Button>
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

export default AddSong