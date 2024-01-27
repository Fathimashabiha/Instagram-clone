import React from 'react'
import './Homepage.css';
import Sidenav from './Navigation/Sidenav';
import Timeline from './Timeline/Timeline';
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Search';

function Homepage() {
  return (
    <div className='homepage'>
      <div className="homepage_nav">
         <Sidenav />
      </div>
      <div className="homepage_timeline">
         <Timeline />
      </div>   

       <Routes>
         <Route path='/search' element= {<Search /> } />
       </Routes> 
    </div>
  )
}

export default Homepage