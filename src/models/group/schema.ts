import * as Joi from '@hapi/joi';
import { PERMISSIONS } from './IGroup';

const groupSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string()
        .required(),
    permissions: Joi.array()
        .items(Joi.string().valid(...PERMISSIONS))
        .required()
});

export default groupSchema;
