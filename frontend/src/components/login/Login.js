import React,{useState} from 'react'
import '../login/Login.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
function Login({loginuser}) {
    const history=useHistory()
    const [User, setUser] = useState({
        email:"",
        password:""
    })
   
    const change=e=>
    {
       setUser({...User,[e.target.name]:e.target.value})
    }

    const submit=()=>
    {
        const { email,password}=User
        if(email && password)
        {
           axios.post("/api/login",User).then((user)=>
           {
            alert(user.data.message)
             loginuser(user.data.user)
              history.push("/")
            })
        }
        else
        {
            alert("please enter details")
        }  
    }
    return (
        
        <div className="login">
            <h1>login</h1>
    <label htmlFor="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="email" value={User.email} onChange={change}/>
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" value={User.password} onChange={change} />
    <br/>
    <button className="button" type="submit" onClick={submit}>Login</button>
    <br/>
    <span>OR</span>
    <br/>
<button type="button" className="button" onClick={()=>history.push("/signup")}>Register</button>
<br/>
        </div>
    )
}

export default Login
