const User = require("../models/users.model")
const bcrypt = require('bcryptjs');
const { genJWT } = require("../helpers/genJWT");


exports.login = async(req, res) => {

    const {userName, pass} = req.body

    try {
        
        const user = await User.findOne({userName})

        if (!user) {
            res.status(400).json({
                msg: `El usuario ${user} no existe`
            })
        }
        
        if (!user.status) {
            res.status(400).json({
                msg: `El usuario ${user} esta inhabilitado`
            })
        }
        
        const validPass = bcrypt.compareSync(pass, user.pass)
        
        if (!validPass) {
            res.status(400).json({
                msg: `Las contraseñas no coinciden`
            })            
        }

        const token = await genJWT (user.id);

        //Respuesta
        res.json({
            msg: 'login Ok',
            user,
            token
        });     

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: 'Algo ha salido mal! :( '});
    }
}