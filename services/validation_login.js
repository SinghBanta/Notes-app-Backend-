const Joi = require("joi");

const  loginValidation = Joi.object({
    
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "string.email": "Invalid email format, please provide a valid email.",
        }),
    password: Joi.string()
    
});


module.exports = { loginValidation };