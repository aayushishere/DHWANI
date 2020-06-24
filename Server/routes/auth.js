const express = require('express');
const  router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
const validator =  require('email-validator')

router.get('/protected',requireLogin,(req,res)=>{
    res.send(`Hello You are protected ${req.user.fullname} `)
})

router.post('/signup',(req,res)=>{
    const {fullname,info,image,email,type,password} = req.body;
    console.log(req.body)
    if( !fullname || !email || !password || !info || !type ){
        return res.status(422).send({"error" : "Please fill all the fields"})
    }
    if(!validator.validate(email)){
        return res.status(422).send({"error" : "Invalid Email"})
    }
    User.findOne({email : email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).send({"error" : "User already exists with this email id"})
        }

        bcrypt.hash(password , 11)
        .then(hashedPassword=>{
            User.create({
            email,
            password : hashedPassword,
            fullname : fullname,
            info,
            image,
            type
            }).then((user)=>{
                res.send({"message" : "Saved user details"})
            }).catch((err)=>{
                console.log(err)
            })
        })

        

    }).catch(err=>{
        console.log(err);   
    })  
})

router.post('/login',(req,res)=>{
    const {fullname,password} = req.body;
    console.log(req.body)
    if( !fullname || !password){
        return res.status(422).send({"error" : "Please fill all the fields"})
    }
    User.findOne({fullname : fullname})
    .then(user=>{
        if(!user){
            return res.send({"error" : "Invalid Username or Password"});
        }
        bcrypt.compare(password,user.password)
        .then(isSame=>{
            if(!isSame){
                return res.send({"error" : "Invalid Username or Password"});
            }
            const token = jwt.sign({_id : user._id},JWT_SECRET)
            const {fullname, email, _id, info, image } = user;
            res.send({"token" : token, "user" : {_id, email , fullname , info , image }})
            
        })
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router;