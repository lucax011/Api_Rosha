const db = require('../config/db');

const Energy = {
    create: (user_id, device_id, consumption, callback) => {
        const query = 'INSERT INTO energy_usage (user_id, device_id, consumption) VALUES (?, ?, ?)';
        db.query(query, [user_id, device_id, consumption], callback);
    },
    getConsumptionByUser: (user_id, callback) => {
        const query = 'SELECT AVG(consumption) as avg_consumption FROM energy_usage WHERE user_id = ?';
        db.query(query, [user_id], callback);
    }
};

module.exports = Energy;
