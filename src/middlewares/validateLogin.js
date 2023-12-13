const knex = require('../conection/conection')
const bcrypt = require('bcrypt')
const validationLogin = async (req, res, next) => {
    const { email, senha } = req.body
    try {
        const user = await knex('usuarios').where({ email }).first()
        if (!user) {
            return res.status(404).json({ message: 'Email ou senha inválidos' })
        }

        const password = await bcrypt.compare(senha, user.senha)
        if (!password) {
            return res.status(400).json({ message: 'Email ou senha inválidos' })
        }

    } catch (error) {

        return res.status(500).json({ message: 'Server internal error.' });
    }
    next()
}

module.exports = validationLogin