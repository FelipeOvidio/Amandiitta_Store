require('dotenv').config();
const knex = require('../conection/conection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const addUser = async (req, res) => {
    const { nome, email, senha } = req.body

    const senhaCriptografada = await bcrypt.hash(senha, 10)
    const user = {
        nome,
        email,
        senha: senhaCriptografada
    }

    try {
        const newUser = await knex('usuarios').insert(user)

        const { senha: _, ...dataUser } = user
        return res.status(200).json(dataUser)
    } catch (error) {
        return res.status(500).json({ message: 'Server internal error.' });
    }
}


const login = async (req, res) => {
    const { email, senha } = req.body

    try {
        const user = {
            email,
            senha
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SENHA, { expiresIn: '8h' })
        const { senha: _, ...userLogged } = user

        return res.status(200).json({ usuario: userLogged, token })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Server internal error.' });
    }
}

const profileUser = async (req, res) => {

    try {
        const user = await knex.select('id', 'nome', 'email').from('usuarios')

        return res.status(200).json(user)
    } catch (error) {

        return res.status(500).json({ message: 'Server internal error.' });
    }
}

module.exports = {
    addUser,
    login,
    profileUser
}