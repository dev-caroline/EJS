const express = require('express')
const mongoose = require('mongoose')
const users = require('./models/userModel')
const app = express()
require('dotenv').config()
app.set('view engine', 'ejs')

const URI = process.env.uri

mongoose.connect(URI)
.then(()=>{
    console.log('mongodb connected');
})
.catch((err)=>{
    console.log(err);
})


app.post('/store', (req,res)=>{
    
})


app.get('/', (req, res)=>{
    res.render('pages/index')
})

app.get('/signup', (req, res)=>{
    res.render('pages/signup')
})

app.get('/signin', (req, res)=>{
    res.render('pages/signin')
})

app.get('/dashboard', (req, res)=>{
    // res.render('pages/dashboard')
    fetch('https://second-class.vercel.app/api')
    .then(res => res.json())
    .then((data)=>{
        // console.log(data);
        res.render('pages/dashboard', {data})
    })
    .catch((err)=>{console.log(err);
    })
})

app.listen(3010, ()=>{console.log('server is running');
})