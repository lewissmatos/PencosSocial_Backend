const jwt = require('jsonwebtoken');

exports.genJWT = (id = '') => {

    return new Promise((resolve, reject) => {
        const payload = { id }

        jwt.sign(   payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '7h'

        }, (err, token) => {
            if (err) {
                console.log(err);      
                reject('No se pudo generar el Token')
            }else {
                resolve (   token  );
            }
        })
    })
}