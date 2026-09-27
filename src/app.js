// Iniciamos el módulo express con el fin de dar inicio al servidor
const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express();

// Llamar al body-parser para procesar las solicitudes en formato JSON[cite: 2]
app.use(bodyParser.json());

// Importar las rutas de nuestro servicio
const authRoute = require('./routes/auth');
app.use('/api', authRoute);

// Primero se configura cómo va a escuchar el servidor las peticiones[cite: 2]
app.listen(10000, () => {
    console.log('Servidor escuchando en el puerto 10000');
});