const jwt = require('../utils/jwt');
const knex2 = require('../database/db/user')
const bcrypt2 = require('../utils/bcript')

const create = async (req, res) => {
    const { nome, email, senha } = req.body

    const senhaCriptografada = await bcrypt2.passHash(senha)
    const user = {
        nome,
        email,
        senha: senhaCriptografada
    }

    try {
        await knex2.userCreate(user)

        delete user.senha

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: 'Server internal error.' });
    }
}


const login = async (req, res) => {
    const { email, senha } = req.body
    // tem que buscar o usuario no banco de dados
    // e pegar o ID e inserir no token
    
    const senhaVerify = await bcrypt2.compare(senha)
    if(!senhaVerify) return res.status(404).json({message: "usuario ou senha inválidos"})

    const userEmail = await knex2.buscaEmail(email)
    if(!userEmail) return res.status(404).json({message: "usuario ou senha inválidos"})
    
    try {
        const { id } = userEmail
        const token = await jwt.tokenGenerate(id)        
       
        const {email, nome } =  userEmail

        const userLogin = {
            usuario: {
                nome,
                email
            },
            token
        } 
        return res.status(200).json(userLogin)

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Server internal error.' });
    }
}

const profileUser = async (req, res) => {

    try {
        const user = await knex2.allUsers()

        return res.status(200).json(user)
    } catch (error) {

        return res.status(500).json({ message: 'Server internal error.' });
    }
}

module.exports = {
    create,
    login,
    profileUser
}