require('dotenv').config();
const jwt = require('jsonwebtoken');
const knex = require('knex');

const verifyUserLoggad = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ message: 'Usuário não autorizado' })
    }

    const token = authorization.split(' ')[1]


    try {
        const { id } = jwt.verify(token, process.env.JWT_SENHA)
        const existUser = await knex('usuarios').where({ id }).first

        if (!existUser) {
            return res.status(401).json({ message: 'Usuários não cadastrado ou não autorizado' })
        }

    } catch (error) {

        return res.status(401).json({ message: 'Usuario não autorizado' })
    }
    next()
}

module.exports = verifyUserLoggad