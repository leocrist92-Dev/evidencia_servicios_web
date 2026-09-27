const express = require('express');
const router = express.Router();

// Importamos el modelo/esquema del usuario
const Usuario = require('../models/Usuario');

// Servicio web para el registro de un usuario
router.post('/registro', async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        // Se verifica si el usuario ya existe previamente en la colección
        const usuarioExistente = await Usuario.findOne({ usuario });
        if (usuarioExistente) {
            return res.status(400).json({ error: 'El usuario ya se encuentra registrado' });
        }

        // Se crea el documento con el modelo e inserta en la base de datos
        const nuevoUsuario = new Usuario({ usuario, contrasena });
        await nuevoUsuario.save();

        res.json({ mensaje: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error interno al registrar el usuario' });
    }
});

// Servicio web para el inicio de sesión
router.post('/login', async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        // Búsqueda en MongoDB de un registro que coincida con las credenciales
        const usuarioValido = await Usuario.findOne({ usuario, contrasena });

        // Si la autenticación es correcta sale un mensaje satisfactorio, de lo contrario error
        if (usuarioValido) {
            res.send('Autenticación satisfactoria');
        } else {
            res.status(401).send('Error en la autenticación');
        }
    } catch (error) {
        res.status(500).send('Error interno en el servidor');
    }
});

// Devuelve como módulo lo que se le asigna a router[cite: 2]
module.exports = router;