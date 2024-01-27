import React from 'react'
import './Profile.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Profile() {
  return (
    
      <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div  style={{display:"flex",
    justifyContent:"space-around",
    margin:"18px 5px",borderBottom:"1px solid grey"}}>
      <div style={{marginBottom:"10px"}}>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}} 
        src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" />
      </div>
      <div>
        <h1>Fathima Shabiha</h1>
        <div style={{display:"flex",justifyContent:"space-between",width:"108%",cursor:"pointer"}}>
          <h6>3 posts</h6>
          <h6>155 followers</h6>
          <h6>166 following</h6>
        </div>
        <div>
          Fathima
        </div>
        <div>
          A good heart keeps you beautiful <FavoriteBorderIcon />
        </div>

      </div>
      </div>
      <div className='gallery'>
        <img className='item'  src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" />
        <img className='item'  src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  />
        <img className='item'  src="https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"  />
      </div>
      </div>
     
        
      
  )
}

export default Profile