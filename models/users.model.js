const {model, Schema} = require('mongoose')

const UserSchema = Schema({
    userName: {
        type: String,
        trim: true,
        required: [true, 'El nombre de usuario es obligatorio']
    },
    pass: {
        type: String,
        trim: true,
        required: [true, 'La contraseña es obligatoria']
    },
    age:{
        type: Number
    },
    status: {
        type: Boolean,
        default: true
    }
})

UserSchema.methods.toJSON = function(){
    const {  __v, pass, _id, ...user  } = this.toObject();
    return user;
};

module.exports = model('User', UserSchema)
