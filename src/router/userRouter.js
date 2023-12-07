const express = require('express');
const addClient = require('../controllers/addClient');
const dataRegisterValidation = require('../middlewares/dataRegisterValidation');

const router = express();

<<<<<<< HEAD
router.get('/test')
=======
router.post('/newclient', dataRegisterValidation, addClient);
>>>>>>> release


module.exports = router;