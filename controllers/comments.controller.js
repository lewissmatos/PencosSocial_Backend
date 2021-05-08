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
        comment,
        
    })
}

exports.getAllCommentsByPostId = async(req, res)=>{
    const {id} = req.params
    
    
    const comments = await Comment.find({status: true}, {post: id}, )

    res.json({
        comments
    })
}

exports.editCommentById = async(req, res)=>{
    const {id} = req.params

    const {_id, createdAt, ...rest} = req.body

    const updatedComment  = await Comment.findByIdAndUpdate({_id: id}, rest, {new: true})

    res.json({
        updatedComment
    })
}

exports.deleteCommentById = async(req, res)=>{
    const {id} = req.params

    const deletedcomment  = await Comment.findByIdAndUpdate({_id: id}, {status: false}, {new: true})

    res.json({
        deletedcomment
    })
}