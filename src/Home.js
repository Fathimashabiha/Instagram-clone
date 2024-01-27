import React from 'react'
import Sidenav from './Navigation/Sidenav'
import Homepage from './Homepage'
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Search';
import Explore from './Components/Explore';
import Message from './Components/Message';
import Reels from './Components/Reels';
import Notification from './Components/Notification';
import Create from './Components/Create';
import Profile from './Components/Profile';


function Home() {
  return (
    <div>
    <div>
        <Sidenav />
    </div>
     
    <Routes>
      <Route path='/home' element= {<Homepage /> } />
      
         <Route path='/search' element= {<Search /> } />
         <Route path='/explore' element= {<Explore /> } />
         <Route path='/reels' element= {<Reels /> } />
         <Route path='/message' element= {<Message /> } />
         <Route path='/notification' element= {<Notification /> } />
         <Route path='/create' element= {<Create  /> } />
         <Route path='/profile' element={<Profile />} />
  </Routes>
 </div>

    
  )
}

export default Home