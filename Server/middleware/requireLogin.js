const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys')
const User = require('../models/user')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).send({"error" : "The user is not Logged In"});
    }
    const token = authorization.replace("Bearer ","");
    jwt.verify(token , JWT_SECRET ,(err, payload)=>{
        if(err){
            return res.status(401).send({"error" : "The user is not Logged In"});
        }
        User.findById(payload._id,(err,user)=>{
            if(err){
                console.log(err)
            }
            req.user = user;
            next()
        })
    });
}