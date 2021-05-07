const Comment = require("../models/comments.model")

exports.createComment = async(req, res)=>{
    const {user, post, body} = req.body

    const comment = new Comment({user, post, body})

    await comment.save()

    res.json({
        msg: 'Creado correctamente',
        comment
    })
}

exports.getCommentById = async(req, res)=>{
    const {id} = req.params
    
    const comment = await Comment.find({_id: id})

    res.json({
        comment
    })
}

exports.getAllCommentsByPostId = async(req, res)=>{
    const {id} = req.params
    
    const comments = await Comment.find({post: id})

    res.json({
        comments
    })
}