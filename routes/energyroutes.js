const express = require('express');
const energyController = require('../controllers/energyController');
const router = express.Router();

router.post('/log-consumption', energyController.logConsumption);  // Rota para registrar o consumo de energia
router.get('/avg-consumption/:user_id', energyController.getAvgConsumption);  // Rota para obter o consumo médio de energia de um usuário

module.exports = router;
