const express = require('express');
const router = require('./routes/index');
const { swaggerUi, specs } = require('../swagger');
require('dotenv').config();
const url =  process.env.API_URL;
const port =  process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', router);
const server =  app.listen(port, () => {
  console.log('Servidor escuchando en el puerto '+ port);
  console.log(url);
}); 

module.exports = {
  app,
  server,  
};