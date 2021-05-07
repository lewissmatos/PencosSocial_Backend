const bcrypt = require('bcryptjs');
const {response, request }= require('express');

const User = require('../models/users.model')

exports.createUser = async(req , res ) => {

    const {userName, pass, age} = req.body;

    const user = new User(  {userName, pass, age}  );
    //Encriptacionde la contraseña
    const salt = bcrypt.genSaltSync();
    user.pass = bcrypt.hashSync(pass, salt);
    //Guardado de datos
    await user.save();
    
    //Respuesta de la Base de Datos
    res.status(201).json({
        mensaje: 'Creado correctamente (POST)',
        user
    })
}

exports.getAllUsers = async(req = request, res = response) => {

    const user = await User.find();
    
    res.json({
        user
    });
}

exports.getUserById = async (req, res)=>{
    const {id} = req.params

    const user = await User.find({_id: id})

    res.json({
        user
    })
}

exports.deteleUserById = async(req, res)=>{
    const {id} = req.params

    const currentUser = req.userName

    const updatedUser = await User.findByIdAndUpdate({_id: id}, {status: false}, {new: true})

    res.json({
        updatedUser,
        msg: `Eliminado por ${currentUser.userName}`
    })
}

exports.editUserById = async(req, res)=>{
    const {id} = req.params;
    const {_id, pass, ...rest} = req.body;

    //Validar contra Base de datos
    if (pass) {
        //Encriptacionde la contraseña     
        const salt = bcrypt.genSaltSync();
        rest.pass = bcrypt.hashSync(pass, salt);
    }
    //Actualizar informacion del usuario
    const user = await User.findByIdAndUpdate({_id: id}, rest, {new: true});

    res.json(user); 
}