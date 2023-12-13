require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyUserLoggad = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ message: 'Usuário não autorizado' })
    }

    const token = authorization.split(' ')[1]
    console.log(token);

    try {
        const tokenUser = await jwt.verify(token, process.env.JWT_SENHA)

    } catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: 'Usuario não autorizado' })
    }
    next()
}

module.exports = verifyUserLoggad