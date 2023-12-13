require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyLoggedUser = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ message: 'Usuário não autorizado' })
    }
    const token = authorization.split(' ')[1]

    try {
        const tokenUser = jwt.verify(token, process.env.JWT_SENHA)


    } catch (error) {
        return res.status(500).json({ message: 'Usuário não autorizado' });
    }
    next()
}

module.exports = verifyLoggedUser