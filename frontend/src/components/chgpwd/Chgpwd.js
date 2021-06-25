import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
function Chgpwd() {
    const notify = () => toast("Please enter new password");
    
    const [User, setUser] = useState({
        email:"",
        password:"",
        confirmpassword:"",
        newpassword:""
    })
    const change=e=>
    {
       setUser({...User,[e.target.name]:e.target.value})
    }
    const submit=()=>
    {
        const { password,confirmpassword,newpassword}=User
        if(password===newpassword&&password===confirmpassword)
        {
            notify()
        }
       else
       {
        axios.patch("/api/chgpwd",User);
       }
        
    }
    return (
        
        <div className="login">
            <h1>Change Password</h1>
    <label htmlFor="email"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="email" value={User.email} onChange={change}/>
       
            <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" value={User.password} onChange={change} />
    <label htmlFor="psw"><b>Confirm Password</b></label>
    <input type="password" placeholder="Enter Password" name="confirmpassword" value={User.confirmpassword} onChange={change} />
    <label htmlFor="psw"><b>Change Password</b></label>
    <input type="password" placeholder="Enter Password" name="newpassword" value={User.newpassword} onChange={change} />
    <br/>
    <button className="button" type="submit" onClick={submit}>Change Password</button>
    <ToastContainer toastClassName={"bg-success text-white font-weight-bold"}/>
    <br/>
       
        </div>
        
    )
}

export default Chgpwd