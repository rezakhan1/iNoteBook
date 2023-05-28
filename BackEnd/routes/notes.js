
const express = require('express')();
const port = 3000;
var router = require('express').Router()

router.get('/', (req, res) => {
    obj={
        a:"reza",
        b:"khan"
    }
   res.json(obj)
})



module.exports= router;
