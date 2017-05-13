const express = require('express')
const router = express.Router()
const api = require('../controllers/questionController')

router.get('/', api.getAll)
router.get('/:id', api.getById)
router.post('/', api.insertQuestion)
router.put('/:id', api.updateQuestion)
router.delete('/:id', api.deleteQuestion)

//ANSWERS
router.post('/:id/answer', api.insertAnswer)
router.delete('/:id/answer/:idAnswer', api.deleteAnswer)

//VOTE UP
router.post('/:id/vote', api.voteQuestion)

module.exports = router
