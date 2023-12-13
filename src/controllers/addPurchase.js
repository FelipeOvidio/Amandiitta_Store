const knex = require('../conection/conection')

const registerPurchase = async (req, res) => {
    const { data, produto_qtd, produto_id, pagamento_tipo, cliente_id, pedido_status } = req.body
    try {
        if (!data && !produto_qtd && !produto_id && pagamento_tipo && !cliente_id && !pedido_status) {
            return res.status(400).json({ message: 'Todos campos precisam ser preenchidos' })
        }

        const newPurchase = {
            data,
            produto_qtd,
            produto_qtd,
            pagamento_tipo,
            cliente_id,
            pedido_status
        }

        const purchase = await knex('pedidos').insert(newPurchase)
        return res.status(200).json(newPurchase)

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Server internal error.' });
    }
}

const listPurchase = async (req, res) => {
    try {
        const getPurchase = await knex('pedidos')
        if (getPurchase.length === 0) {
            return res.status(404).json({ message: 'Não existe pedidos para serem exibidos' })
        }
        return res.status(200).json(getPurchase)
    } catch (error) {
        return res.status(500).json({ message: 'Server internal error.' });
    }
}

module.exports = {
    registerPurchase,
    listPurchase
}