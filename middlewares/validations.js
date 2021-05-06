const { validationResult } = require('express-validator');

exports.validations = (req, res, next) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(404).json(errors);
    }

    next();
};
