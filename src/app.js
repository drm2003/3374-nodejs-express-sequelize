const express = require('express');
const routes = require('./routes');

const app = express();

routes(app);

// Versão anterior:
// app.use(express.json());

// app.get('/teste', (req, res) => {
//   res
//     .status(200)
//     .send({ mensagem: 'boas-vindas à API' });
// });

module.exports = app;
