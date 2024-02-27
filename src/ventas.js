const axios = require('axios');
const moment = require('moment');
const { swaggerUi, specs } = require('../swagger');
require('dotenv').config();
const api_url =  process.env.API_URL;


const axiosInstance = axios.create({
    timeout: 5000, //timeout de 5 segundos

  });
  
  async function getVentas(fechaInicio, numeroDias) {
    try {
      //const fechaFin = moment(fechaInicio).add(numeroDias - 1, 'days').format('YYYY-MM-DD');
      const url = `${api_url}/${fechaInicio}?${numeroDias}`;
      console.log('URL de la solicitud HTTP:', url);
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al realizar la solicitud HTTP:', error.message);
      throw new Error('Error en la solicitud HTTP');
    }
  }

module.exports = {
  getVentas
};


/**
 * @swagger
 * /ventas/{fechaInicio}/{numeroDias}:
 *   get:
 *     summary: Obtener ventas en un rango de fechas
 *     description: Endpoint para obtener las ventas en un periodo específico.
 *     parameters:
 *       - in: path
 *         name: fechaInicio
 *         required: true
 *         description: Fecha de inicio en formato 'YYYY-MM-DD'.
 *       - in: path
 *         name: numeroDias
 *         required: true
 *         description: Número de días a incluir.
 *     responses:
 *       200:
 *         description: Datos de ventas obtenidos con éxito.
 *       500:
 *         description: Error en el servidor.
 */

