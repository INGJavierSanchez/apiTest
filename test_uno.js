const axios = require('axios');

async function obtenerDatosDeApi() {
  const apiUrl = 'https://apirecruit-gjvkhl2c6a-uc.a.run.app/compras/2019-12-01';

  try {
    const response = await axios.get(apiUrl);
    
    // Devolver los datos como JSON
    return response.data;
  } catch (error) {
    // Manejar errores, por ejemplo, imprimir el error en la consola
    console.error('Error al obtener datos de la API:', error.message);
    throw error; // Puedes manejar el error según tus necesidades
  }
}

// Llama a la función para obtener datos y manejar el resultado
obtenerDatosDeApi()
  .then(data => {
    console.log('Datos de la API:', data);
  })
  .catch(error => {
    console.error('Error general:', error.message);
  });