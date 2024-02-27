const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nombre de tu API',
      version: '1.0.0',
      description: 'Descripción de tu API',
    },
  },
  apis: ['../src/routes/*.js'], // Rutas a tus archivos de definición de rutas
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
