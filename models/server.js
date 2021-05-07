const express = require('express')
const cors = require('cors')
require('colors')

const usersRoute =require('../routes/users.routes')
const postsRoute =require('../routes/posts.routes')
const commentsRoute =require('../routes/comments.routes')

const { dbConnection } = require('../database/db.config')

class Server {

    constructor(){
        
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'
        this.postsPath = '/api/posts'
        this.commentsPath = '/api/comments'
        
        this.dbConnection()

        this.middlewares()

        this.routes()

    }

    async dbConnection(){
        await dbConnection()
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server at ${this.port}`.brightCyan));
    }

    routes(){
        this.app.use(this.usersPath, usersRoute );
        this.app.use(this.postsPath, postsRoute );
        this.app.use(this.commentsPath, commentsRoute );
    }

    middlewares(){
        this.app.use(   cors()  );
        //Lectura y parseo del body
        this.app.use(  express.json()  );
    }
}

module.exports = Server