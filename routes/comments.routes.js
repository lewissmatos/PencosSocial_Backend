const {Router}=require('express')
const { createComment, getAllCommentsByPostId, getCommentById } = require('../controllers/comments.controller')

const router= Router()


router.post('/', [
], createComment)

router.get('/',[
], getAllCommentsByPostId)

router.get('/:id',[
], getCommentById)

module.exports = router