const mongoose = require('mongoose');

// Definición del esquema para los usuarios en MongoDB
const usuarioSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    }
});

// Se exporta el modelo de datos para poder consultarlo o actualizarlo[cite: 2]
module.exports = mongoose.model('Usuario', usuarioSchema);