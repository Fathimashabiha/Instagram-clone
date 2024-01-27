import React from 'react'
import './Sidenav.css';
import insta from '../Images/insta.png'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase';
import { loginUser, logoutUser } from '../Feature/UserSlice';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';



function Sidenav() {
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
   
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
   

    const user = useSelector(state => state.data.user.user);
    const dispatch = useDispatch();
    const  handleLogout = () => {
        dispatch(loginUser());
        signOut(auth);
    }
  return (
    <div className='sidenav'>
        <img className='sidenav_logo' src={insta} alt="" />
        <div className="sidenav_buttons">
        <Link className='link' to='/home'>
            <button className="sidenav_button">
                <HomeIcon />
                <span className='menubar'>Home</span>
            </button>
            </Link>
            
            <>
            <div className="searchoffcanvas">
            <Button variant='none' className='border-0' onClick={handleShow1}>
                <SearchIcon/>
                <span  className='menubar'>Search</span>
            </Button>
            </div>
              <Offcanvas show={show1} onHide={handleClose1}>
             <Offcanvas.Header closeButton>
             <Offcanvas.Title>Search</Offcanvas.Title>
             </Offcanvas.Header>
            <Offcanvas.Body>
             <input type='search' className='searchbox w-100 ' placeholder='Search'/>
      
                 <div className='recent'>Recent</div>
             <p className='recentsearch'>No Recent searches.</p>
             </Offcanvas.Body>
           </Offcanvas>
        </>
          
            <button className="sidenav_button">
            <Link className='link_explore' to='/explore' ><ExploreIcon />
                <span  className='menubar'>Explore</span>
                </Link>
            </button>
          
            <Link className='link' to='/reels'>
            <button className="sidenav_button">
                <SlideshowIcon/>
                <span  className='menubar'>Reels</span>
            </button>
            </Link>

            <Link className='link' to='/message'>
            <button className="sidenav_button">
                <ChatIcon />
                <span  className='menubar'>Message</span>
            </button>
            </Link>
            {/*
            <Link className='link' to='/notification'>
            <button className="sidenav_button">
                <FavoriteBorderIcon />
                <span>Notification</span>
            </button>
  </Link> */ }

<>
            <div className="searchoffcanvas">
            <Button variant='none' className='border-0' onClick={handleShow2}>
                <FavoriteBorderIcon/>
                <span  className='menubar'>Notification</span>
            </Button>
            </div>
              <Offcanvas show={show2} onHide={handleClose2}>
             <Offcanvas.Header >
             <Offcanvas.Title className='ntitle'>Notification</Offcanvas.Title>
             </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="nhead">
              <div className="suggestions_username">
    <div className="username_left">
      <span className="avatar">
        <Avatar>I</Avatar>
      </span>
      <div className="username_info">
        <span className='username'>Follow requests</span>
        <span className="relation">deva_dev + 207 others</span>
      </div>
    </div>
    <button className='follow_button'> • </button>
    </div>
        </div>
        <div className="nbody">
            <h5 className='earlierheading'>Earlier</h5>
        <div className="suggestions_username">
    <div className="username_left">
      <span className="avatar">
        <Avatar>SP</Avatar>
      </span>
      <div className="username_info">
        <span className='username'>Sowmiya_prabha</span>
        <span className="relation">sowmi</span>
      </div>
    </div>
    <button className='following_button'>Following</button>
    
    
    </div>
        </div>
        <div className="suggestions_username">
    <div className="username_left">
      <span className="avatar">
        <Avatar>V</Avatar>
      </span>
      <div className="username_info">
        <span className='username'>Vikram</span>
        <span className="relation">thatboy</span>
      </div>
    </div>
    <button className='following_button'>Following</button>
    </div>
    <div className="suggestions_username">
    <div className="username_left">
      <span className="avatar">
        <Avatar>ZM</Avatar>
      </span>
      <div className="username_info">
        <span className='username'>Zahid Mohammed</span>
        <span className="relation">zahu</span>
      </div>
    </div>
    <button className='following_button'>Following</button>
    </div>
    <div className="suggestions_username">
    <div className="username_left">
      <span className="avatar">
        <Avatar>S</Avatar>
      </span>
      <div className="username_info">
        <span className='username'>Simran</span>
        <span className="relation">simmu</span>
      </div>
    </div>
    <button className='following_button'>Following</button>
    </div>
    <div className="suggestions_username">
    <div className="username_left">
      <span className="avatar">
        <Avatar>AF</Avatar>
      </span>
      <div className="username_info">
        <span className='username'>Afrin Fathima</span>
        <span className="relation">afu ashiq</span>
      </div>
    </div>
    <button className='following_button'>Following</button>
    </div>
      
                
             </Offcanvas.Body>
           </Offcanvas>
        </>
          
              
            
       {/*
            <Link className='link' to='/create'>
            <button className="sidenav_button">
                <AddBoxOutlinedIcon />
                <span>Create</span>
            </button>
</Link> */ }
         
         <>
         <div className="createoffcanvas">
      <Button variant="none" className='border-0 w-100%' onClick={handleShow3}>
        <AddBoxOutlinedIcon/>
          <span  className='menubar'>Create</span>
      </Button>
      </div>

      <Modal show={show3} onHide={handleClose3} className='mt-5'>
        <Modal.Header >
          <Modal.Title className='text-center ms-5 ps-5'>Create a New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-3 pt-5 mt-5 mb-3 ms-5 ps-5'>
        <VideoLibraryIcon  className=' ms-5 text-center ' style={{fontSize:"100px"}} />
        
        <p className=' pt-5 mt-3  ms-3 me-5' >Drag photos and video here</p>
        
        <Button className='mb-5 ms-3 me-5 ' variant="primary">Select from computer</Button>
        </Modal.Body>
        
      </Modal>
    </>
         
  
  
        
        <Link className='link' to='/profile'>
        <button className="sidenav_button">
                <Avatar className='menubar'>{user.username ? user.username.charAt(0).toUpperCase() : "A"}</Avatar>
                <span className='menubar'>
                Profile
                </span>
          </button>
          </Link>

            <button onClick={handleLogout} className='logout_button'>
               <LogoutIcon /> <span className='menubar'>Logout</span></button>
        </div>
         <div className="sidenav_more">
            <button className='sidenav_button'>
                <MenuIcon />
                <span className='menubar'>More</span>
            </button>
         </div>
    </div>
  )
}

export default Sidenav