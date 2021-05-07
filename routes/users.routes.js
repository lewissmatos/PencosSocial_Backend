const {Router} = require('express')
const { check } = require('express-validator');

const {validations}=require('../middlewares/validations')

const { userExists } = require('../middlewares/validateUser.mdw');
const { getAllUsers, createUser } = require('../controllers/user.controller')

const router = Router()

router.post('/', [
    check('pass').isLength({min: 8}),
    check('userName').custom(userExists),
    validations
], createUser);

router.get('/', getAllUsers)

module.exports = router