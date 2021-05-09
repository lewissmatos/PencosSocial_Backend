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
    
    const comment = await Comment.findOne({_id: id})

    res.json({
        comment,
        
    })
}

exports.getAllCommentsByPostId = async(req, res)=>{
    const {id} = req.params
    
    const comments = await Comment.find({$and: [{status: true}, {post: id}]} )

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

exports.getCommentByPostId = async (req, res) => {
    const {id, idcom}=req.params

    //const comment = Comment.findOne({_id: idcom}, {post: id})
    const comment = await Comment.findOne({$and: [{_id: idcom}, {post: id}]})

    res.json({
        comment
    })

}
