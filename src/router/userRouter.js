const express = require('express')

const router = express();

router.get('/test', (req, res) => {
    try {
        return res.status(200).json({ message: 'Tudo ok' })

    } catch (error) {
        return res.status(500).json({ message: 'Erro Interno no Servidor' })
    }
})


module.exports = {
    router
}