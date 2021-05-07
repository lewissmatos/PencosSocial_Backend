const {Schema, model} = require('mongoose')
const User = require('./users.model')

const PostSchema = Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
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
    },
    like:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
})


module.exports = model('Post', PostSchema)