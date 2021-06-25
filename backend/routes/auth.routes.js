const express = require("express");
const router = express.Router();
const userSchema = require("../models/users");

router.post("/register", (req, res) => 
{
    const {name,email,password}=req.body;
    userSchema.findOne({email:email},(err,user)=>
    {
        if(user)
        {
            res.send({message:"user already registered"})
        }
        else
        {
            const user=new userSchema({name,email,password})
    user.save((err)=>{
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.send({message:"successfully saved"})
        }
    })
        }
    })
});


router.post(
  "/login",(req,res)=>
  {
    const {email,password}=req.body; 
    userSchema.findOne({email:email},(err,user)=>
    {
        if(user)
        {
            if(password==user.password)
            {
                res.send({message:"user successfull",user})
            }
            else
            {
                res.send({message:"password not match"})
            }
        }
        else
        {
            res.send({message:"user not registered"})
        }
    })
  });

// router.get("/chgpwd",(req,res)=>
// {
//     const{email,password,newpassword}=req.body;
//     userSchema.findOne(email,(err,user)=>
//     {
//         res.send({user});
//     })
// })


module.exports = router;
