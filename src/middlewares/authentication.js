const jw = require('../utils/jwt')

const verifyLoggedUser = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ message: 'Usuário não autorizado' })
    }
    
    const token = authorization.split(' ')[1]

    try {
        const verify = jw.tokenValidate(token)
        const { id } = verify
        req.userId = id
        next()

    } catch (error) {
        return res.status(500).json({ message: 'Usuário não autorizado' });
    }
}

module.exports = verifyLoggedUser