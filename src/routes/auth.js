const express = require('express');
const router = express.Router();

// Base de datos simulada en memoria para almacenar los registros
const usuariosRegistrados = [];

// Servicio web para el registro de un usuario
router.post('/registro', (req, res) => {
    // Se extraen los datos enviados en el cuerpo de la petición POST
    const nuevoUsuario = {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena
    };

    // Se guarda el usuario en el arreglo simulando una base de datos
    usuariosRegistrados.push(nuevoUsuario);

    res.json({ mensaje: 'Usuario registrado correctamente' });
});

// Servicio web para el inicio de sesión
router.post('/login', (req, res) => {
    // Se capturan las credenciales ingresadas por el cliente
    const usuarioIngresado = req.body.usuario;
    const contrasenaIngresada = req.body.contrasena;

    // Se valida si existe un registro que coincida exactamente con el usuario y la contraseña
    const usuarioValido = usuariosRegistrados.find(
        (user) => user.usuario === usuarioIngresado && user.contrasena === contrasenaIngresada
    );

    // Si la autenticación es correcta sale un mensaje satisfactorio, de lo contrario devuelve error
    if (usuarioValido) {
        res.send('Autenticación satisfactoria');
    } else {
        res.status(401).send('Error en la autenticación');
    }
});

// Devuelve como módulo lo que se le asigna a router[cite: 2]
module.exports = router;