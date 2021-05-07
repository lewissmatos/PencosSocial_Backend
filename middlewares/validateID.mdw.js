const Post = require('../models/posts.model')

exports._idExists = (async (id ) => {
    const idExists = await Post.findById(id);

    if (!idExists) {
        throw new Error( `El Id: ${id} no existe`);
    }
});
