import Joi from "joi";

const userRegistrValidator = Joi.object(
    {
        username: Joi.string()
            .pattern(/^[a-zA-Z]\w{1,19}$/)
            .error(errors => {
                    console.log(errors);
                    errors.forEach(error => {
                        switch (error.code) {
                            case 'string.empty':
                                error.message = 'cannot be empty';
                                break;
                            case 'string.pattern.base':
                                error.message = 'the username should not start with numbers and should contain only Latin letters and numbers without special symbols';
                                break;
                        }
                    })
                    return errors;
                }
            )
        ,

        password: Joi.string()
            .pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/)
    })

export default userRegistrValidator;