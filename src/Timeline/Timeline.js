import React, { useState } from 'react'
import './Timeline.css'
import Suggestionright from './Suggestionright'
import Post from './Posts/Post'

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "akash_",
            postImage: "https://plus.unsplash.com/premium_photo-1682513184135-b7b9b76fb4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww",
            likes: 55,
            timestamp: "1h",
        },
        {
            user: "Jimin_",
            postImage: "https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww",
            likes: 5432,
            timestamp: "2h",
        },
        {
            user: "Ethan_",
            postImage: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww",
            likes: 123,
            timestamp: "6h",
        },
        {
            user: "Chloe_",
            postImage: "https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww",
            likes: 664,
            timestamp: "12h",
        },
    ]);
  return (
    <div className='timeline'>

        <div className="timeline_left">
           <div className='status_row'> 
            <div className='status'>
                <div className="sub_status"></div>
                <div className='status_name'>Akash</div>
            </div>
            <div className='status'>
                <div className="sub_statuses"></div>
                <div className='status_name'>swetha</div>
            </div>
            <div className='status'>
                <div className="substatus"></div>
                <div className='status_name'>harish</div>
            </div>
            <div className='status'>
                <div className="subStatus"></div>
                <div className='status_name'>prakash</div>
            </div>
            <div className='status'>
                <div className="sub_status1"></div>
                <div className='status_name'>divya</div>
            </div>
            <div className='status'>
                <div className="sub_status2"></div>
                <div className='status_name'>ramya</div>
            </div>
            <div className='status'>
                <div className="sub_status3"></div>
                <div className='status_name'>hazel</div>
            </div>
            <div className='status'>
                <div className="sub_status4"></div>
                <div className='status_name'>irshad</div>
            </div>
           </div> 
            <div className="timeline_posts">
                {posts.map(post => (
                    <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
                ))}
            </div>
        </div>
        <div className="timeline_right">
           <Suggestionright />
        </div>    
    </div>
  )
}

export default Timeline