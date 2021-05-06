const express = require('express')
const cors = require('cors')

const usersRoute =require('../routes/users.routes')
require('colors')

const { dbConnection } = require('../database/db.config')

class Server {

    constructor(){
        
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'
        
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
    }

    middlewares(){
        this.app.use(   cors()  );
        //Lecturay prseo del body
        this.app.use(  express.json()  );
    }
}

module.exports = Server