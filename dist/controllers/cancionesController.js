"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCancion = exports.actualizarCancion = exports.agregarCancion = exports.obtenerCancion = exports.obtenerCanciones = void 0;
const mysql_service_1 = __importDefault(require("../Services/mysql.service"));
const obtenerCanciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)('SELECT * FROM canciones');
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null,
        };
        res.json(data); //esto se ejecuta cuando se ejecute la promesa asincrono sin await y async
    }
    catch (error) {
        res.status(500).send(error);
    }
    /*executeQuery('SELECT * FROM canciones').then((response) => {
        res.json(response);
    }).catch((error)=> {
        res.status(500).send(error);
    });*/
});
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