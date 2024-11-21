const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authController = {
    register: (req, res) => {
        const { email, password } = req.body;
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ error: 'Erro ao criar senha' });

            User.create(email, hashedPassword, (err, result) => {
                if (err) return res.status(500).json({ error: 'Erro ao registrar usuário' });
                res.status(201).json({ message: 'Usuário criado com sucesso' });
            });
        });
    },
    login: (req, res) => {
        const { email, password } = req.body;

        User.findByEmail(email, (err, user) => {
            if (err || !user) return res.status(404).json({ error: 'Usuário não encontrado' });

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err || !isMatch) return res.status(400).json({ error: 'Senha incorreta' });

                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({ message: 'Login bem-sucedido', token });
            });
        });
    }
};

module.exports = authController;
