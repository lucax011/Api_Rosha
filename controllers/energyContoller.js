const Energy = require('../models/energyModel');

const energyController = {
    logConsumption: (req, res) => {
        const { user_id, device_id, consumption } = req.body;
        Energy.create(user_id, device_id, consumption, (err, result) => {
            if (err) return res.status(500).json({ error: 'Erro ao registrar consumo' });
            res.status(201).json({ message: 'Consumo registrado com sucesso' });
        });
    },
    getAvgConsumption: (req, res) => {
        const { user_id } = req.params;
        Energy.getConsumptionByUser(user_id, (err, result) => {
            if (err) return res.status(500).json({ error: 'Erro ao obter consumo' });
            res.status(200).json(result);
        });
    }
};

module.exports = energyController;
