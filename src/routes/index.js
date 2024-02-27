const express = require('express');
const router = express.Router();
const ventas = require('../ventas');
const estadisticas = require('../estadisticas');

router.get('/resumen/:fecha_inicio', async (req, res) => {
  try {
    const {fecha_inicio}= req.params;
    const numero_dias  = req.query.dias;
    const ventasData = await ventas.getVentas(fecha_inicio, numero_dias);
    const estadisticasData = estadisticas.calcularEstadisticas(ventasData);
    res.json(estadisticasData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports =router;
