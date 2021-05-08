const {Router}=require('express')
const { createComment, getAllCommentsByPostId, getCommentById, editCommentById, deleteCommentById } = require('../controllers/comments.controller')

const router= Router()



router.get('/:id',[
], getAllCommentsByPostId)

router.get('/:id',[
], getCommentById)

router.post('/', [
], createComment)

router.put('/:id',[
], editCommentById)

router.delete('/:id',[
], deleteCommentById)

module.exports = router