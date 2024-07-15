import Joi from "joi";
export const postValidator = Joi.object(
    {
        title: Joi
            .string()
            .required()
            .min(3)
            .max(30)
            .messages({
                'string.empty':'*This field is not allowed to be empty',
                'string.min':'*This field should have a minimum length of 3',
                'string.max':'*This field should have a max length of 30',
            }),
        body:Joi
            .string()
            .required()
            .messages({
                'string.empty':'*This field is not allowed to be empty',
            })
    }
)