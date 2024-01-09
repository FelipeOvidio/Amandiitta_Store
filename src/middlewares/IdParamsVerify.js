
class IdParamsVerify{
    paramsVerify(req, res, next){
        const { id } = req.params
        
        id.trim() ? next():
        res.status(400).json({msg: 'Deve-se passar um parametro para essa rota'}) 
    }
}

module.exports = new IdParamsVerify()