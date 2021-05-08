const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post:{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    status:{
        type: Boolean,
        default: true
    }
})

module.exports = model('Comment', CommentSchema)