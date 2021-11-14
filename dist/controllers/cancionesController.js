"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCancion = exports.actualizarCancion = exports.agregarCancion = exports.obtenerCancion = exports.obtenerCanciones = void 0;
const obtenerCanciones = (req, res) => {
    res.send('obtener canciones desde el controlador');
};
exports.obtenerCanciones = obtenerCanciones;
const obtenerCancion = (req, res) => {
    res.send('obtener cancion desde el controlador');
};
exports.obtenerCancion = obtenerCancion;
const agregarCancion = (req, res) => {
    res.send('agregar cancion desde el controlador');
};
exports.agregarCancion = agregarCancion;
const actualizarCancion = (req, res) => {
    res.send('actualizar cancion desde el controlador');
};
exports.actualizarCancion = actualizarCancion;
const eliminarCancion = (req, res) => {
    res.send('eliminar cancion desde el controlador');
};
exports.eliminarCancion = eliminarCancion;
//# sourceMappingURL=cancionesController.js.map