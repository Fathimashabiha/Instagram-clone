import React from 'react'
import './Create.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Create() {
  return (
    <>
     <div className="modal show"
      style={{ display: 'flex', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title className='text-center ms-5 ps-'>Create new post</Modal.Title>
        </Modal.Header>

        <Modal.Body className='pb-3 pt-5 mt-5 mb-3 ms-5 ps-5 '>
         
           
           <VideoLibraryIcon  className=' ms-5 text-center' style={{fontSize:"100px"}} />
        
          <p className=' pt-5 mt-3  ms-3 me-5' >Drag photos and video here</p>
          <Button className='  mb-5 ms-3 me-5  ' variant="primary">Select from computer</Button>
        </Modal.Body>

       
      </Modal.Dialog>
    </div>
    
    </>
  )
}

export default Create