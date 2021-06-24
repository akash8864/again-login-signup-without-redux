import React,{useState} from 'react'
import '../login/Login.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'
function Login({loginuser}) {
    const notify = () => toast("Your Loggedin");
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
            notify()
           axios.post("/api/login",User).then((user)=>
           {
            
           // alert(user.data.message)
            setTimeout(() => {
                loginuser(user.data.user)
               history.push("/")
            }, 1000);
             
            })
        }
        else
        {
            alert("please enter details")
        }  
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <br/>
    <label htmlFor="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="email" value={User.email} onChange={change}/>
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" value={User.password} onChange={change} />
    <br/>
    <button className="button" type="submit" onClick={submit}>Login</button>
    <ToastContainer toastClassName={"bg-success text-white font-weight-bold"}/>
    <br/>
    <span>OR</span>
    <br/>
<button type="button" className="button" onClick={()=>history.push("/signup")}>Register</button>
<br/>
        </div>
    )
}

export default Login
