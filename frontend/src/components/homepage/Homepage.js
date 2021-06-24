import React from 'react'
import '../homepage/Homepage.css'
function Homepage({loginuser}) {
    return (
        <div className="homepage">
           <h1>hello</h1>
           <button type="submit" className="button" onClick={loginuser}>Logout</button>
        </div>
    )
}

export default Homepage
