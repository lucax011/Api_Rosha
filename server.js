const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const energyRoutes = require('./routes/energyRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

dotenv.config();  // Carregar variáveis de ambiente

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Para lidar com JSON no corpo das requisições

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/energy', energyRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
