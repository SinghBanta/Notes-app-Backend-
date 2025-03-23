const Joi = require("joi");

const registrationValidation = Joi.object({
    username: Joi.string().required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "string.email": "Invalid email format, please provide a valid email.",
        }),
    password: Joi.string()
        
});


module.exports = { registrationValidation };