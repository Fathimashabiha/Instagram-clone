import React from 'react'
import  { Avatar } from "@mui/material";
import './Suggestionright.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Suggestionright() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    
    <div className='suggestions'>
        
        <div className="suggestions_username">
    <div className="username_left">
      <span className="avatar">
        <Avatar>I</Avatar>
      </span>
      <div className="username_info">
        <span className='username'>irshad shabu</span>
        <span className="relation">irshad</span>
      </div>
    </div>
    <Button variant='light' className='follow_button' onClick={handleShow}>switch</Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='switchtitle'>Switch accounts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            
            <div className="username_info">
              <span className='username'>ram</span>
            </div>
          </div>
          <button className='follow_button'>^</button>
          </div>
          </Modal.Body>
        <Modal.Footer>
          
          <div className='switchfoot'>Log into an Existing account</div>
        </Modal.Footer>
      </Modal>
    </div>

       <div className="suggestions_title">
        Suggestions for you
       </div>
       <div className="suggestions_usernames">

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username_info">
              <span className='username'>ram</span>
              <span className="relation">follows you</span>
            </div>
          </div>
          <button className='follow_button'>follow</button>

        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>S</Avatar>
            </span>
            <div className="username_info">
              <span className='username'>seeta</span>
              <span className="relation">follows you</span>
            </div>
          </div>
          <button className='follow_button'>follow</button>

        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>V</Avatar>
            </span>
            <div className="username_info">
              <span className='username'>Vijay </span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>follow</button>

        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>J</Avatar>
            </span>
            <div className="username_info">
              <span className='username'>jungkook jeon</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>follow</button>

        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info">
              <span className='username'>Alia bhatt</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>follow</button>
         
        </div>
      
        
       </div>
    </div>
  )
}

export default Suggestionright