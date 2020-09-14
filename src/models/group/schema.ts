import * as Joi from '@hapi/joi';

const groupSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string()
        .required(),
    permissions: Joi.array()
        .items(Joi.string())
        .required()
});

export default groupSchema;
