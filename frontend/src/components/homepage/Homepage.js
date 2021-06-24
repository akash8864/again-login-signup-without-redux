import React from 'react'
import {NavDropdown,Navbar} from 'react-bootstrap'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import '../homepage/Homepage.css'
function Homepage({ loginuser, user }) {
  return (

    <div className="homepage">
<Navbar style={{paddingRight:"100px"}} bg="dark" className=" justify-content-end ">    
        <NavDropdown title={<AccountCircleRoundedIcon/>}  >
          <NavDropdown.Item >Profile</NavDropdown.Item>
          <NavDropdown.Item >Change Password</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={loginuser}>Sign out</NavDropdown.Item>
        </NavDropdown>
</Navbar>
      <h1 style={{ text: "center" }}>Hello,
        <span style={{ color: "red", textTransform: "uppercase" }}>
          {user.name}
        </span>
        Welcome to Our World
      </h1>
    </div>
  )
}

export default Homepage
