const {Router} = require('express')
const { check } = require('express-validator');
const { createPost, getAllPosts, getPostById } = require('../controllers/post.controller');
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


module.exports = router