const knex = require('../conection/conection')

const addProduct = async (req, res) => {
    const { descricao, qtd_estoque, valor, imagem, fornecedor_id } = req.body

    if (!descricao && qtd_estoque && valor && imagem && fornecedor_id) {
        return res.status(409).json({ messaage: 'Todos os campos devem ser preenchidos' })
    }

    try {
        const product = {
            descricao,
            qtd_estoque,
            valor,
            imagem,
            fornecedor_id
        }

        const existProduct = await knex('produtos').where({ descricao }).first()
        if (existProduct) {

            return res.status(401).json({ message: 'Já existe um produto cadastrado com essa descrição' })
        }
        if (qtd_estoque <= 0) {
            return res.status(401).json({ message: 'A quantidade de estoque deve ser maior que 0' })
        }

        const newProduct = await knex('produtos').insert(product)

        res.status(200).json(product)


    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server internal error.' })
    }
}



module.exports = {
    addProduct
}