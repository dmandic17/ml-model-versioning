const Joi = require ('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{5,32}$')
            )

        }
        const {error,value} = Joi.validate(req.body, schema)

        if(error){
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address.'
                    })
                    break;
                case 'password':
                    console.log('pass')
                    res.status(400).send({
                        error: 'The password does not match the rules: <br> - only a-z, A-Z and 0-9 characters <br> - minimum is 5 and maximum 32 characters.<br>'
                    })
                    break;
                deafult:
                    res.status(400).send({
                        error: 'Invalid registration information.'
                    })

            }
        }
        else {
            next()
        }
    }
}