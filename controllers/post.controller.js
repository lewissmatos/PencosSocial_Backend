

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

    const posts = await Post.find()

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