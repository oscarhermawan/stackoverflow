const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport');
const Strategy = require('passport-local').Strategy
const api = require('./controllers/userController')

app.use(cors())

mongoose.connect('mongodb://localhost/stackoverflow_coba', (err)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Connection Success');
  }
})

// const answers = require('./routes/answers')
const questions = require('./routes/questions')
const users = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

passport.use(new Strategy(api.signIn))
app.use(passport.initialize())

app.use('/users', users)
// app.use('/answers', answers)
app.use('/questions', questions)

app.listen(3000)
module.exports = app
