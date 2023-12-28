
const knex2 = require('../database/db/user')

const validationUser = async (req, res, next) => {
    const { nome, email, senha } = req.body

    try {
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'Campos nome, email e senha são obrigatórios' })
        }
        const existEmail = await knex2.buscaEmail(email)
        
        if (existEmail) {
            return res.status(401).json({ message: 'Email já cadastrado' })
        }
        next()

    } catch (error) {
        return res.status(500).json({ message: 'Server internal error.' });
    }
}

module.exports = validationUser