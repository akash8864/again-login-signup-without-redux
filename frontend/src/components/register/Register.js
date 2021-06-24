import React, { useState } from 'react'
import '../register/Register.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
function Register() {
    const history=useHistory()
    const [User, setUser] = useState({
        name:"",
        email:"",
        password:"",
        password2:""
    })
    const change=e=>
    {
       setUser({...User,[e.target.name]:e.target.value})
    }
    const register=()=>
    {
           const {name,email,password,password2}=User
           if(name&&email && password && (password===password2))
           {
           axios.post("/api/register",User).then((user)=>
           {
               alert(user.data.message)
            history.push("/login")
            })
           }
           else
           {
               alert("please enter details")
           }
        }
    return (
        <div className="register">
            <h1>Register</h1>
    <label htmlFor="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="name" value={User.name} onChange={change}/>
    <label htmlFor="email"><b>Email</b></label>
    <input type="email" placeholder="Enter E-mail" name="email" value={User.email} onChange={change} />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" value={User.password} onChange={change} />
    <label htmlFor="psw2"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="password2" value={User.password2} onChange={change} />
    <br/>
    <button type="submit" onClick={register} className="button">Register</button>
    <br/>
    <span>OR</span>
    <br/>
    <button className="button" type="submit" onClick={()=>history.push("/login")}>Login</button>
    <br/>
        </div>
    )
}

export default Register
