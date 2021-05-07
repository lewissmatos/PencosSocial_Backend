

const Post = require('../models/posts.model')

exports.createPost = async(req, res)=>{

    const {user, header, body, status, img} = req.body


    const post  = new Post({user, header, body, status, img})

    await post.save()

    res.json({
        msg: 'Creado correctamente',
        post
    })
}

exports.getAllPosts = async(req, res)=>{

    const posts = await Post.find({status: true})

    res.json({
        posts
    })
}
exports.getPostById = async(req, res)=>{

    const {id} = req.params
    const post = await Post.find({_id: id})
    res.json({
        post
    })
}

exports.editPostById = async(req, res )=>{
    const {id} = req.params

    const {_id, createdAt, ...rest} = req.body

    const updatedPost  = await Post.findByIdAndUpdate({_id: id}, rest, {new: true})

    res.json({
        updatedPost
    })
}

exports.deletePostById = async(req, res )=>{

    const {id} = req.params

    const deletedPost  = await Post.findByIdAndUpdate({_id: id}, {status: false}, {new: true})

    res.json({
        deletedPost
    })
}