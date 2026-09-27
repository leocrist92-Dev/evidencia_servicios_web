// Iniciamos el módulo express con el fin de dar inicio al servidor y mongoose
const express = require('express'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

const app = express();

// Llamar al body-parser para procesar las solicitudes en formato JSON[cite: 2]
app.use(bodyParser.json());

// Cadena de conexión a MongoDB (Local o MongoDB Atlas)[cite: 2]
const mongoURI = 'mongodb://localhost:27017/evidencia_db';

// Establecemos la conexión a la base de datos[cite: 2]
mongoose.connect(mongoURI)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Importar las rutas de nuestro servicio
const authRoute = require('./routes/auth');
app.use('/api', authRoute);

// Primero se configura cómo va a escuchar el servidor las peticiones[cite: 2]
app.listen(10000, () => {
    console.log('Servidor escuchando en el puerto 10000');
});