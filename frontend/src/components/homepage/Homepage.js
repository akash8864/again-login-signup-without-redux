import React from 'react'
import '../homepage/Homepage.css'
function Homepage({loginuser,user}) {
    return (
        <div className="homepage">
           <h1 style={{text:"center"}}>Hello, <span style={{color:"red",textTransform:"uppercase"}}>{user.name}</span> Welcome to Our World</h1>
           <button type="submit" className="button" onClick={loginuser}>Logout</button>
        </div>
    )
}

export default Homepage
