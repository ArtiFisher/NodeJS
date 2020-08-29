import * as Joi from '@hapi/joi';

const userSchema = Joi.object({
    id: Joi.string()
        .required(),
    login: Joi.string()
        .required(),
    password: Joi.string()
        .required()
        // password should contain at least one digit and one letter
        // and only letters and digits are allowed
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/),
    age: Joi.number()
        .required()
        .min(4)
        .max(130),
    isDeleted: Joi.boolean()
        .required()
});

export default userSchema;
