import React from 'react'
import './Message.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Message() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div className='message'>
      <div>
      <img className='textmessageimg' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyush73IzGDokWRYVDx7ZGkn15sy_tWRP9jR8jP8TGgibR348c' />
      <h4 className='textmessageheading'>Your messages</h4>
      <p className='textmessage'>Send private photos and messages to a friend or group</p>
      <Button className="textmessagebtn" onClick={handleShow}>Send message</Button>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='mtitle'>New Message</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mbody'>To: <input type='search' placeholder='Search' className='mbody' />
        <div className='mmbody'>No account found.</div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" className='mbtn' onClick={handleClose}>
            Chat
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      
      <div className='text'>
        
      </div>
      </div>
      
  )
}

export default Message