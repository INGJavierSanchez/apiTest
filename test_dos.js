const express = require('express');
const axios = require('axios');
const moment = require('moment');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const api_url = process.env.API_URL;

app.get('/resumen/:fecha', async (req, res) => {
  const fechaInicio = req.params.fecha;

  try {
    const fechaFin = moment(fechaInicio).format('YYYY-MM-DD');
    const url = `${api_url}/compras/${fechaInicio}/${fechaFin}`;
    const response = await axios.get(url);
    
    // Devolver los datos como JSON
    res.json(response.data);
  } catch (error) {
    const fechaFin = moment(fechaInicio).format('YYYY-MM-DD');
    const url = `${api_url}/${fechaInicio}/${fechaFin}`;
    console.log(url);
    console.error('Error al obtener datos de la API:', error.message);
    console.error('Detalles del error:', error.response.data);
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
