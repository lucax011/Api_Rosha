const db = require('../config/db');

const Recommendation = {
    create: (user_id, recommendation, callback) => {
        const query = 'INSERT INTO recommendations (user_id, recommendation) VALUES (?, ?)';
        db.query(query, [user_id, recommendation], callback);
    },
    getAll: (user_id, callback) => {
        const query = 'SELECT * FROM recommendations WHERE user_id = ?';
        db.query(query, [user_id], callback);
    }
};

module.exports = Recommendation;
