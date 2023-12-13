
const knex = require('../conection/conection')
const validationUser = async (req, res, next) => {
    const { nome, email, senha } = req.body

    try {
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'Campos nome, email e senha são obrigatórios' })
        }
        const existEmail = await knex('usuarios').where({ email }).first()
        if (existEmail) {
            return res.status(401).json({ message: 'Email já cadastrado' })
        }


    } catch (error) {

        console.log(error.message);
        return res.status(500).json({ message: 'Server internal error.' });
    }
    next()
}

module.exports = validationUser