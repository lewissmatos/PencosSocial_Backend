const {Schema, model} = require('mongoose')
const User = require('./users.model')

const PostSchema = Schema({
    user:{
        type: String,
        required: true
    },
    header:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    img:{
        type: String,
        default: false
    }
})


module.exports = model('Post', PostSchema)