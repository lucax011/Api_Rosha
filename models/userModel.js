const db = require('../config/db');

const User = {
    create: (email, password, callback) => {
        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(query, [email, password], callback);
    },
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], callback);
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = User;
