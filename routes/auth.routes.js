const Router = require('express')

const { check }= require('express-validator')

const { login } = require('../controllers/auth.controller')
const { validations } = require('../middlewares/validations');

const router =Router()

router.post('/', [
    check('userName', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('pass', 'la contraseña es obligatoria').not().isEmpty(),
    validations
], login )

module.exports = router