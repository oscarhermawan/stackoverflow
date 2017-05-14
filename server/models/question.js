const mongoose = require('mongoose')
const Schema = mongoose.Schema

var answerSchema = new Schema({
  answer_by :{
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  description:{
    type:String
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

var voteSchema = new Schema({
  number:{
    type:Number,
    enum:[1,-1]
  },
  voted_by:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
}, {_id:false})

var questionSchema = new Schema({
  asked_by :{
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  votes:[voteSchema],
  answers:[answerSchema],
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

var Question = mongoose.model('Question', questionSchema)

module.exports = Question
