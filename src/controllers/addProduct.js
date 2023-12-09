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
        if (valor <= 0) {
            return res.status(401).json({ message: 'O valor do produto deve ser maior que 0' })
        }

        const newProduct = await knex('produtos').insert(product)

        return res.status(200).json(product)


    } catch (error) {

        return res.status(500).json({ message: 'Server internal error.' })
    }
}


const getPorduct = async (req, res) => {
    try {

        const allProduct = await knex('produtos')
        if (allProduct === undefined) {
            return res.status(404).json({ message: 'Não produtos para serem exibidos' })
        }
        return res.status(200).json(allProduct)

    } catch (error) {
        return res.status(500).json({ message: 'Server internal error.' })
    }
}

const getPorductById = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.status(404).json({ message: 'Informa o numero de identificação do produto' })
        }

        const existProduct = await knex('produtos').where({ id }).first()
        if (existProduct === undefined) {
            return res.status(404).json({ message: 'Nenhum produto encontrado com esse id' })
        }

        const product = await knex('produtos').where({ id }).first()
        return res.status(200).json(product)

    } catch (error) {
        return res.status(500).json({ message: 'Server internal error.' })
    }
}

module.exports = {
    addProduct,
    getPorduct,
    getPorductById
}