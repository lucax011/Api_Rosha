const express = require('express');
const recommendationController = require('../controllers/recommendationController');
const router = express.Router();

// Rota para criar uma recomendação
router.post('/create', recommendationController.createRecommendation);

// Rota para obter todas as recomendações de um usuário
router.get('/:user_id', recommendationController.getRecommendations);

module.exports = router;
