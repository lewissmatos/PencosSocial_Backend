const User = require('../models/users.model');

exports.userExists = (async (userName = '' ) => {
    const userRep = await User.findOne({userName});

    if (userRep) {
        throw new Error( `El usuarios ${userName} ya existe`);
    }
});