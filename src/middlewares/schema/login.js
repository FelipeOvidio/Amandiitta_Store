const Joi = require('@hapi/joi')

const loginRule = Joi.string()
const passwordRule = Joi.string()

module.exports.login = Joi.object({
  body: Joi.object({
    login: loginRule.required(),
    password: passwordRule.required(),
  }).required(),
})

module.exports.teste = Joi.object({
    body: Joi.object({
      login: loginRule.required(),
      password: passwordRule.required(),
    }).required(),
  })