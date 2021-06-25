import React from 'react'
import { NavDropdown, Dropdown, Navbar } from 'react-bootstrap'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import '../homepage/Homepage.css'
function Homepage({ loginuser, user }) {
  return (
    <div className="homepage">
      <Navbar style={{ paddingRight: "100px" }} bg="dark" className=" justify-content-end ">
        <NavDropdown title={<AccountCircleRoundedIcon />}  >
          <Dropdown.Item href="/chgpwd">Change Password</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={loginuser}>Sign out</Dropdown.Item>

        </NavDropdown>
      </Navbar>
      <h1 style={{ text: "center" }}>Hello,
        <span style={{ color: "red", textTransform: "uppercase" }}>
          {user.name}
        </span>
        Welcome to Our World
      </h1>
      <div className="container my-5 ">
        <div className="card text-center text-white " style={{ fontWeight: "bold", fontSize: "20px" }}>
          <div className="card-header bg-success">
            Table
          </div>
          <div className="card-body bg-dark text-danger" style={{ fontWeight: "bold", fontSize: "20px" }}>
            Name:  <span style={{ color: "white",textTransform: "uppercase" }}>{user.name}</span><br />
            E-mail:  <span style={{ color: "white" }}>
              {user.email}
            </span><br /><br />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage
