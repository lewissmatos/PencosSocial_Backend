const {Router} = require('express')
const { check } = require('express-validator');

const {validations}=require('../middlewares/validations')

const { userExists } = require('../middlewares/validateUser.mdw');
const { getAllUsers, createUser, getUserById, editUserById } = require('../controllers/user.controller')

const router = Router()


router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', [
    check('pass').isLength({min: 8}),
    check('userName').custom(userExists),
    validations
], createUser);

router.put('/:id',[
    check('id').isMongoId(),
    validations
], editUserById)

module.exports = router