const Recommendation = require('../models/recommendationModel');

const recommendationController = {
    createRecommendation: (req, res) => {
        const { user_id, recommendation } = req.body;
        Recommendation.create(user_id, recommendation, (err, result) => {
            if (err) return res.status(500).json({ error: 'Erro ao criar recomendação' });
            res.status(201).json({ message: 'Recomendação criada com sucesso' });
        });
    },
    getRecommendations: (req, res) => {
        const { user_id } = req.params;
        Recommendation.getAll(user_id, (err, result) => {
            if (err) return res.status(500).json({ error: 'Erro ao obter recomendações' });
            res.status(200).json(result);
        });
    }
};

module.exports = recommendationController;
