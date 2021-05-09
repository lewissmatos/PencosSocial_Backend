const {Router} = require('express')
const { check } = require('express-validator');
const { getAllCommentsByPostId, getCommentByPostId } = require('../controllers/comments.controller');
const { createPost, getAllPosts, getPostById, editPostById, deletePostById } = require('../controllers/post.controller');
const { _idExists } = require('../middlewares/validateID.mdw');

const {validations}=require('../middlewares/validations')

const router = Router()

router.get('/', [
    validations
],getAllPosts)

router.get('/:id', [
    check('id').isMongoId(),
    check('id').custom(_idExists),
    validations
],getPostById )

router.post('/', createPost)

router.put('/:id',[
    check('id').isMongoId(),
    validations
], editPostById)

router.delete('/:id',[
    check('id').isMongoId(),
    validations
], deletePostById )

router.get('/:id/comments',[
    check('id').isMongoId(),
    validations
], getAllCommentsByPostId )

router.get('/:id/comments/:idcom',[
    check('id').isMongoId(),
    validations
], getCommentByPostId )

module.exports = router