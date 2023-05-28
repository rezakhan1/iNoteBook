const User = require('../Models/User');

const express = require('express')();
const port = 3000;
var router = require('express').Router()

//Create new post man 
// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/', (req, res)=>{ 
    console.log(req.body);
    // const newUser = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    //  });
   // const user = User(req.body);
   // newUser.save()
    res.send(req.body);
} )



module.exports= router;
