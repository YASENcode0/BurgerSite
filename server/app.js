
const express = require('express');
const mongoose = require('mongoose');
const port = 3001 || 5000;
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/burgerusers').then(()=>{
    app.listen(port,()=>{
        console.log('connect to db , port : '+port);
    })
}).catch((err)=>{
    console.log("err : ",err)
})
